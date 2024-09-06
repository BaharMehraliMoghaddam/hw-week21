import {  
  AppBar,  
  Button,  
  Container,  
  IconButton,  
  Stack,  
  Toolbar,  
  Typography,  
} from "@mui/material";  
import DiamondIcon from "@mui/icons-material/Diamond";  
import ADDRoutes from "../../Router/PathRouters/ConfigRoutes";  
import { useNavigate } from "react-router-dom";  
import LoginIcon from '@mui/icons-material/Login';  

const navbar = [  
  { title: "Home", route: ADDRoutes.Home },  
  { title: "Courses", route: ADDRoutes.Courses },  
];  

export default function Header() {  
  const navigate = useNavigate();  
  const Token = localStorage.getItem("access");  

  return (  
    <AppBar position="fixed" className="bg-red-600 shadow-xl">  
      <Container>  
        <Toolbar>  
          <Stack direction={"row"} alignItems={"center"} flexGrow={1}>   
            <Typography variant="h6" className="ml-2 text-white font-semibold">  
              Courses  
            </Typography>  
          </Stack>  
          <Stack direction={"row"} spacing={2}>  
            {navbar.map((nav, index) => (  
              <Button  
                color="inherit"  
                key={index}  
                onClick={() => navigate(nav.route)}  
                className="hover:bg-indigo-700 rounded-md transition duration-200"  
              >  
                {nav.title}  
              </Button>  
            ))}  
          </Stack>  
          {Token ? (  
            <Button  
              color="inherit"  
              variant="outlined"  
              className="ml-3 text-white border-white hover:bg-white hover:text-indigo-600 transition duration-200"  
              onClick={() => {  
                localStorage.clear();  
                navigate(ADDRoutes.Login);  
              }}  
            >  
              Log out  
            </Button>  
          ) : (  
            <Button  
              color="inherit"  
              variant="outlined"  
              className="ml-3 text-white border-white hover:bg-white hover:text-indigo-600 transition duration-200"  
              onClick={() => navigate(ADDRoutes.Login)}  
            >  
              Login  
            </Button>  
          )}  
        </Toolbar>  
      </Container>  
    </AppBar>  
  );  
}