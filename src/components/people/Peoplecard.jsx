import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import staffdata from "./data/staffdata";
import studentdata from "./data/studentdata";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const customstyle = {
    display: "inline-flex",justifyContent:"center",paddingTop:"1em", margin: "10px", textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
}


function App(props) {
    var data;
    if (props.type === "staff")
        data = staffdata;
    else if (props.type === "student")
        data = studentdata;

    return data.map((x) => {
        return <div style={customstyle}>
            <Card sx={{ minWidth: 200, maxWidth: 500 }} >
                <CardActionArea>
                    <CardMedia
                        alt={x.title}
                        component="img"
                        title="GeeksforGeeks"
                        height="200"
                        image={x.imglink}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {x.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {x.discription}
                        </Typography>
                        <a href={x.profile} > <LinkedInIcon /> </a>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    })


}
export default App;
