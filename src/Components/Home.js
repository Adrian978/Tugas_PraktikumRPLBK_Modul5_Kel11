import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kel11: [],
            visible: false,

        };
    }

    handleButton = (teks) => {
        alert(teks);
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3001/anggota",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    kel11: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (

            <div style={{ marginTop: 20 }}>
                <h1 style={{ textAlign: "center" }}>Tugas Modul 5</h1>
                <h2 style={{ textAlign: "center" }}>Anggota Kelompok</h2>

                <Grid container md={9} spacing={5} style={{ marginTop: "50px", marginLeft: "450px", marginRight: "auto", textAlign: "center" }}>

                    {this.state.kel11.map((results, index) => {
                        return (
                            <Grid item key={results.nama} md={4}>
                                <Card>
                                    <CardActionArea onClick={() => this.handleButton(results.teks)}>
                                        <CardContent style={{ backgroundColor: '#89C4F4' }}>
                                            <Typography variant="h6" style={{ color: 'white' }}>Nama : {results.nama}</Typography>
                                            <Typography variant="h6" style={{ color: 'white' }}>NIM : {results.nim}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}