import { homeActions } from "redux/slice/homeSlice"; 
import { getToken } from "./utility";
//import { editRoleApi } from "service/StaffManagement";
import { decodeJWT } from ".";

const makeTrue = obj => {
  if (typeof obj === "object") {
    obj.create = true;
    obj.view = true;
    obj.edit = true;
    obj.delete = true;
  }
  return obj;
};

const adminPrivileges = () => async (dispatch, getState) => {
  // const token = getToken();
  // const docodedToken = decodeJWT(token) ?? {};

  // const { roleId } = docodedToken;
  // if (!roleId) return;

  // const { data: { data, status, data: { hasAllAccess = false } = {} } = {} } =
  //   await editRoleApi({ roleId });
    let data =  {
      "inventoryManagement": {
          "create": true,
          "view": true,
          "edit": true,
          "delete": false
      },      
      "isAdminOverviewApproval": true,
      "hasAllAccess": false,
      "_id": "62663aee99f96d00122343cf",
      "roleName": "supplier",
      "roleDescription": "Sub Admin",
      "createdAt": "2022-04-25T06:08:46.831Z",
      "updatedAt": "2023-08-14T10:05:37.943Z",
      "__v": 0
  };
  let filteredData = data;

//   if (status !== 200) return;

//   if (hasAllAccess && filteredData) {
//     for (const key of Object.keys(filteredData)) {
//       makeTrue(filteredData[key]);
//     }
//   }

  dispatch(homeActions.updatePrevilegesState(filteredData));
  return filteredData;
};

export default adminPrivileges;
