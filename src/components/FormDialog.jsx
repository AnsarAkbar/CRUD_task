import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function FormDialog({
                                       setShowFields,
                                       showFields,
                                       handleProduct,
                                       productName,
                                       handleDateChange,
                                       selectedDate,
                                       handleSubmit,
                                       editMode,
                                       setSelectedDate,
                                       setProductName
}) {
    const handleClose = () => {
        setShowFields(!showFields)
        setProductName("");
        setSelectedDate("");
    };

    return (
        <>
            <Dialog
                open={showFields}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <div className="border border-white flex flex-col items-center gap-3 mb-0 w-fit mx-auto p-5 rounded">
                        <input
                            value={productName.trim()}
                            type="text"
                            placeholder="Product Name"
                            onChange={handleProduct}
                            style={{ width: "100%" }}
                            className="px-3 py-2 border border-gray-300 text-gray-950 rounded focus:outline-none"
                        />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="px-3 w-full py-2 border border-gray-300 text-gray-950 rounded focus:outline-none"
                        />
                        <div className='flex flex-wrap justify-center gap-2'>                            
                            <button
                                className="bg-blue-500 ml-2 text-white py-1 px-3 rounded hover:bg-blue-700 cursor-pointer"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                {editMode === null ? "Add Product" : "Update product"}
                            </button>
                            <button
                                className="bg-[#A9A9A9] text-white py-1 px-3 rounded hover:bg-[#A9A9A9] cursor-pointer"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
