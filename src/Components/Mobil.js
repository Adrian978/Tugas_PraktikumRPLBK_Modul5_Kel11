import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#89C4F4',
    borderRadius: '25px',
    p: 4,
};

const DetailMobil = createContext();

export default function Mobil() {
    const [mobil, setMobil] = useState([]);
    const [nama, setNama] = useState('');
    const [spec, setSpec] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/mobil",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setMobil(data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ marginTop: 20 }}>

            <h1 style={{ textAlign: "center" }}>Daftar Harga Mobil Bekas</h1>

            <Grid container md={11} spacing={4} style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}>
                {mobil.map((results) => {
                    return (
                        <Grid item key={results.nama} md={3}>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setNama(results.nama); setSpec(results.spec) }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={results.gambar}
                                    />
                                    <CardContent style={{ backgroundColor: '#89C4F4' }}>
                                        <Typography variant="h6" style={{ color: 'white' }}>{results.nama}</Typography>
                                        <Typography variant="body" style={{ color: 'white' }}>Harga: {results.harga}​​​​​​</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <DetailMobil.Provider value={{ nama: nama, spec: spec }}>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-mobil"
                        aria-describedby="modal-modal-detail"
                    >
                        <Detail />
                    </Modal>
                </div>
            </DetailMobil.Provider>
        </div >
    );
}

function Detail() {
    const info = useContext(DetailMobil);
    return (
        <Box sx={style}>
            <Typography id="modal-modal-mobil" variant="h6" component="h2">
                {info.nama}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Transimisi: {info.spec.Transmisi}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Warna: {info.spec.Warna}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Kilometer: {info.spec.Kilometer}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Mesin: {info.spec.Mesin}
            </Typography>
            <Typography id="modal-modal-detail" sx={{ mt: 1 }}>
                Kondisi: {info.spec.Kondisi}
            </Typography>
        </Box>
    );
}