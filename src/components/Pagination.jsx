import ReactPaginate from 'react-paginate'

export default function Pagination ({ handleUpdate, pags }) {
  return (
    <ReactPaginate
      className='flex flex-row items-center justify-center gap-4 mt-6'
      pageClassName='li-pag'
      breakLabel='...'
      nextLabel='siguiente >'
      pageRangeDisplayed={5}
      pageCount={pags}
      previousLabel='< atras'
      renderOnZeroPageCount={null}
      onClick={handleUpdate}
      activeClassName='active-a'
    />
  )
}
