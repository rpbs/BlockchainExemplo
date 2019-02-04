import Cliente from "../ethereum/build/Cliente.json";
import Web3 from "web3";

export default (address) => {
  return new Web3.eth.Contract(
    JSON.parse(Cliente.interface),
    address
  )
}
