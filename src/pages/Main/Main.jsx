import { 
  useContext, 
  useEffect, 
  useState 
} from "react";
import {
  Box, 
  CircularProgress, 
  Pagination, 
  TableCell, 
  TableRow, 
  Typography 
} from "@mui/material";
import Header from "src/components/Header/Header";
import BasicTable from "src/components/UI/Table/Table";
import BasicButton from "src/components/UI/Button/Button";
import Context from "src";
import formatDate from "src/helpers/format-date";
import { eventsListHeader, userListHeader } from "src/constants";
import { 
  contentStyle, 
  infoListStyle, 
  loadingProgressStyle, 
  paginationStyle, 
  tableActionButton, 
  titleStyle 
} from "./style";

const Main = () => {
  const store = useContext(Context);
  const limitUsersPerPage = 5;
  const socket = new WebSocket("wss://test.relabs.ru/event");

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.onmessage = (e) => {
      setEvents(prev => [...prev, JSON.parse(e.data)]);
    }
  }, []);
 
  useEffect(() => {
    getUsers();
  }, [page]);

  const getUsers = () => {
    store.getUserList(offset, limitUsersPerPage)
    .then(data => {
      setIsLoading(true);
      const pages = data.total / data.per_page; 

      setTimeout(() => {
        setUsers(data.items);
        setTotalPages(pages);
        setIsLoading(false);
      }, 1000)
    });
  }

  const handleChange = (e, num) => {
    setPage(num);

    if (page === num) {
      return;
    }

    if (page > num) {
      setOffset(limitUsersPerPage * (num - 1));
      return;
    }

    setOffset(limitUsersPerPage * (num - 1));
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  }

  return (
    <Box>
      <Header />
      <Box sx={contentStyle}>
        <Box sx={infoListStyle}>
          <Typography sx={titleStyle}>
            Список пользователей
          </Typography>
          <BasicTable tableHeadList={userListHeader}>
            {users.map((user) => (
              <TableRow key={user.name}>
                <TableCell 
                  component="th" 
                  scope="row"
                >
                  {user.id}
                </TableCell>
                <TableCell>
                  {user.name}
                </TableCell>
                <TableCell>
                  {user.role}
                </TableCell>
                <TableCell>
                  {formatDate(user.ctime)}
                </TableCell>
                <TableCell>
                  <BasicButton 
                    sx={tableActionButton}
                    type="button"
                    onClick={() => removeUser(user.id)}
                  >
                    Удалить
                  </BasicButton>
                </TableCell>
              </TableRow>
            ))}
          </BasicTable>
          <Pagination 
            page={page} 
            onChange={handleChange} 
            count={totalPages} 
            variant="outlined" 
            shape="rounded" 
            sx={paginationStyle}
          />
          { 
            isLoading && <CircularProgress sx={loadingProgressStyle} size={25}/> 
          }
        </Box>
        <Box sx={infoListStyle}>
          <Typography sx={titleStyle}>
            События
          </Typography>
          <BasicTable tableHeadList={eventsListHeader}>
            {events.map((event) => (
              <TableRow key={event.event}>
                <TableCell 
                  component="th" 
                  scope="row"
                >
                  {formatDate(event.ctime)}
                </TableCell>
                <TableCell>
                  {event.event}
                </TableCell>
              </TableRow>
            ))}
          </BasicTable>
        </Box>
      </Box>
    </Box>
  )
}

export default Main;