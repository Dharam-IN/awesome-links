import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <>
        <div className="max-w-[1200px] mx-auto py-2 pt-[90px]">
          <div className="w-[350px] mx-auto">
            <h2 className="text-[22px] text-center mb-1">Add Contact</h2>
            <form className="">
              <div className="field mt-3">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter Name" className="border h-9 w-full pl-3 rounded-md text-[13px]"/>
              </div>
              <div className="field mt-3">
                <label>Email</label>
                <input type="text" name="email" placeholder="Enter Email" className="border h-9 w-full pl-3 rounded-md text-[13px]"/>
              </div>
              <button type="" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-md mt-3">Add Contact</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddContact;