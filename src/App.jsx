import { useState } from "react";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";
import AlertDialog from "./components/AlertDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FormDialog from "./components/FormDialog";

function App() {
  const [productName, setProductName] = useState("");
  const [productList, setProductList] = useState([]);
  const [showFields, setShowFields] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [alertDialog, setAlertDialog] = useState(false);
  const [delItemId, setDelItemId] = useState("");

  // console.log("productList editMode", editMode);
  console.log("productList", productList);

  const handleProduct = (e) => {
    setProductName(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    if (editMode !== null) {
      const updatedList = productList.map((prod, index) => {
        if (editMode === index) {
          return { name: productName, date: selectedDate };
        } else {
          return prod;
        }
      });

      setProductList(updatedList);
      setEditMode(null);
      setShowFields(false)
    } else {
      if (productName !== "" && selectedDate !== "") {
        setProductList([
          ...productList,
          { name: productName, date: selectedDate },
        ]);
        setShowFields(false)
      } else {
        alert("Field is empty");
      }
    }
    setProductName("");
    setSelectedDate("");
  };

  const handleEdit = (product, index) => {
    setProductName(product.name);
    setSelectedDate(product.date);
    setEditMode(index);
    setShowFields(true);
  };
  const openDialog = (index) => {
    setAlertDialog(!alertDialog);
    setDelItemId(index);
  };
  return (
    <div>
      <div className="bg-[#1A1A40] p-5 rounded-md">
        <p className="text-3xl font-bold text-center mb-6 max-md:text-2xl px-[10px]">Product Manager</p>
        <button
          className={`${showFields?'bg-red-600 hover:bg-red-700':'bg-gray-600 hover:bg-gray-700'}text-white py-2 px-2 rounded mb-6 block mx-auto cursor-pointer`}
          onClick={() => setShowFields(!showFields)}
        > 
          {showFields ? <AiOutlineClose /> : "Add item"}
        </button>
        {/*{showFields && (*/}
        {/*  <div className="border border-white flex flex-col items-center gap-3 mb-6 w-fit mx-auto p-5 rounded">*/}
        {/*    <input*/}
        {/*      value={productName.trim()}*/}
        {/*      type="text"*/}
        {/*      placeholder="Product Name"*/}
        {/*      onChange={handleProduct}*/}
        {/*      style={{ width: "100%" }}*/}
        {/*      className="px-3 py-2 border border-gray-300 text-gray-950 rounded focus:outline-none"*/}
        {/*    />*/}
        {/*    <input*/}
        {/*      type="date"*/}
        {/*      value={selectedDate}*/}
        {/*      onChange={handleDateChange}*/}
        {/*      className="px-3 w-full py-2 border border-gray-300 text-gray-950 rounded focus:outline-none"*/}
        {/*    />*/}
        {/*    <button*/}
        {/*      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"*/}
        {/*      type="submit"*/}
        {/*      onClick={handleSubmit}*/}
        {/*    >*/}
        {/*      {editMode === null ? "Add Product" : "Update product"}*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*)}*/}

        {productList.map((product, index) => (
          <div className="flex justify-between items-center bg-[#8758ff] rounded-sm text-white px-[1rem] py-[0.55rem] my-3">
            <div>
              <p className="text-lg font-medium text-zinc-950 max-md:">
                {product.name}
              </p>
              <p className="text-sm font-medium text-zinc-950 max-md:text-sm">
                {product.date}
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer pr-1"
                icon={faPenToSquare}
                onClick={() => handleEdit(product, index)}
              />
              <FontAwesomeIcon
                className="cursor-pointer pl-1"
                icon={faTrash}
                onClick={() => openDialog(index)}
              />
            </div>
          </div>
        ))}
        {alertDialog !== false ? (
          <AlertDialog
            delItemId={delItemId}
            productList={productList}
            setProductList={setProductList}
            setAlertDialog={setAlertDialog}
            alertDialog={alertDialog}
          />
        ) : (
          ""
        )}

        {showFields &&
          <FormDialog
              showFields={showFields}
              setShowFields={setShowFields}
              handleProduct={handleProduct}
              productName={productName}
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
              handleSubmit={handleSubmit}
              editMode={editMode}
              setProductName={setProductName}
              setSelectedDate={setSelectedDate}
          />
        }

      </div>
    </div>
  );
}

export default App;
