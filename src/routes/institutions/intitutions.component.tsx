import { Outlet, useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

const Institutions = () => {
  const { account, active } = useWeb3React();
  const navigate = useNavigate();
  console.log('account',account);
  if (!account || !active) {
    navigate('/');
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default Institutions;