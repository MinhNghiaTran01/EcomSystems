import { useContext } from 'react';
import {routes} from '../../routes'
import {useRoutes} from 'react-router-dom'
import LinkPath from '../../context/link_path';
function AllRoute() {
  const {link,setLink} = useContext(LinkPath)
  if(link){
    routes[0]['children'].push(...link)
  }
  const elements = useRoutes(routes);
  return elements;
}
export default AllRoute;