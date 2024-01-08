import React from "react";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const BigComponent = () => {
  const [users, setUsers] = useState([
    { id: 1, write: "open", text: [{ titel: "Task 1" }] },
    { id: 2, write: "pending", text: [{ titel: "Task 2" }] },
    { id: 3, write: "inproge", text: [{ titel: "Task 3" }] },
    { id: 4, write: "progress", text: [{ titel: "Task 4" }] }
  ]);

  const [modalactive, setModalactive] = useState(false)
  const [titel, setTitel] = useState('')
  const [titel2, setTitel2] = useState('')
  const [titel3, setTitel3] = useState('')
  const [titel4, setTitel4] = useState('')

  const saveUser =()=> {
    let payload = { titel };
    if (titel2 !== "") {
    
      users[titel2].text.push(payload);
    } else {
    
      users[titel3].text[titel4].titel = titel;
    }
    setUsers([...users]);
    setModalactive(false); 
  };

  const removeItems =(item, index, titel5)=> {
    item.text.splice(titel5, 1);
    setUsers([...users]);
  };

  const changeEdit =(index, index2)=> {
    setTitel3(index);
    setTitel4(index2);
    setModalactive(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((item, index)=> {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">{item.write}</h1>
                </div>
                {item.text.map((e, titel5)=> {
                  return (
                    <div
                      key={titel5}
                      className="card-body d-flex justify-content-between"
                    >
                      <h3>{e.titel}</h3>
                      <div>
                        <button
                          onClick={()=> changeEdit(index, titel5)}
                          className="btn btn-info"
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={()=> removeItems(item, index, titel5)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="card-footer">
                  <button
                    className="btn btn-success d-flex m-auto"
                    onClick={()=> setModalactive(true)}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={modalactive} toggle={()=> setModalactive(false)}>
        <ModalHeader>
          <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
          <input
            onChange={(e)=> setTitel(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Titel"
          />
          <select
            className="form-control mt-2"
            onChange={(e)=> setTitel2(e.target.value)}
          >
            <option value="" hidden>
              Select your table
            </option>
            {users.map((item, index)=> {
              return (
                <option key={index} value={index}>
                  {item.write}
                </option>
              );
            })}
          </select>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" onClick={saveUser}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BigComponent;
