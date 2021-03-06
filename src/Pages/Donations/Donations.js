import React, { useState, useEffect } from 'react'
import styles from './Donations.module.css';
import Donation from '../../Components/Donation/Donation';
import ButtonPrimary from '../../Components/Button/ButtonPrimary';
import Pagination from '../../Components/Pagination/Pagination';
import Header from '../../Components/Layout/Header/Header'
import { Link } from 'react-router-dom';
import Axios from 'axios';



function Donations() {
    const [donationsList, setDonationsList] = useState([])
    

    useEffect(() => {
        Axios.get(`https://doacao-backend.herokuapp.com/api/v1/donations/getdonations`).then((response) => {
          setDonationsList(response.data);
        })
      }, [])



    return (
        <>
            <Header />

            <div className={styles.Donations}>

            {donationsList.map((value) => {

                    return (
                        <Donation
                            profilePic = {value.images}
                            key={value.id}
                            img={value.images}
                            name={value.name}
                            setor={value.setor}
                            cidade={value.city}
                            imgActive = {value.images}
                            description={value.description}
                            condition={value.condicao}
                            phone={`https://wa.me/${value.phone}`} />
                    )
                })}

                <Link to="/donate">
                    <ButtonPrimary>
                        Quero Doar!
                    </ButtonPrimary>
                </Link>    
            </div>

            <Pagination
                itemsCountPerPage={3}
                totalItemsCount={20}
                pageRangeDisplayed={3}
                lastPageText={'Última'}
                firstPageText={'Primeira'}
            />
        </>    
    )
}

export default Donations
