import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Popup from './Modal';
import sampleData from './Sampledata';
import Loader from './Loader';

const columns = [
  { name: "Date-Time", selector: (row:any) => row.date_time, sortable: true },
  { name: "Note Type", selector: (row:any) => row.notetype, sortable: true },
  { name: "Provider", selector: (row:any) => row.provider, sortable: true },
];

const customStyles = {
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#f5f5f5',
    },
  },
  rows: {
    style: {
      minHeight: '72px',
    },
  },
};

const TableHeader = () => (
  <div style={{ marginBottom: "20px", textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
    TEST TEST PATIENT-LIST
  </div>
);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading,setIsLoading]=useState(true)

  const handleRowSelected = (state:any) => {
    if (state.selectedRows.length > 0) {
      setSelectedRow(state.selectedRows[0]); 
      setIsModalOpen(true);
    }
  };

  useEffect(()=>{
   const timer =  setTimeout(()=>{
      setIsLoading(false)
     },1000);
     return ()=>clearTimeout(timer)
  },[])

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <>
    {
      loading?(
        <Loader/>
      ):(
      <div className="row container home" style={{ marginTop: "50px" }}>
        <TableHeader />
        <DataTable
          columns={columns}
          data={sampleData}
          pagination
          highlightOnHover
          responsive
          striped
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          fixedHeader
          customStyles={customStyles}
          style={{ minWidth: "30rem" }}
        />
      </div>
         )}
      <Popup isOpen={isModalOpen} toggle={handleModalClose} data={selectedRow} />
    </>
  );
};

export default Home;
