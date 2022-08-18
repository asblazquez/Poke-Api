import Pagination from 'react-bootstrap/Pagination';

export function Pager(props) {
    debugger
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}