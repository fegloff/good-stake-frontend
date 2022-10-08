import { Outlet, useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

const Private = () => {
  const { account, active } = useWeb3React();
  const navigate = useNavigate();

  if (!account || !active) {
    navigate('/');
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default Private;