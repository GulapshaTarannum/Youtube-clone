import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@mui/icons-material/Tune';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAICAQMCBAQEBAUFAAAAAAECAAMRBBIhMUEFE1FhIjJxoZGxwdEUI2KBBhVC4fFDUnKC8P/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQACAgICAgMAAAAAAAAAAAABEQIDITESQQSREzJR/9oADAMBAAIRAxEAPwDMmo3L8NbEjjp3kg17fKgX6y2qtkyCQR7SzElSusWAHzCpPtLIYjxAFHCOAKadJpxqLNm4LxnJmeSDY6QCV1fl2MmQdpxxK8Rk5igCijhEZRYkoRhGG2TCx4AGTAIbYR+YvoYQCX1EPh9IyRFkQpPke1YbPeHEMQoeQ2mLB9JpoqR0YvZtIHAx1kPKY9CIVIuFEJo8i3/tz9JQ7Ki7nIUepgfBQkUsqsJCOrEdcGTxEZQhiIDJgRgZkwsYAAyZBrOy8e8YNmCj1MpYljHiPEAr2wlmIQCWoNdZQO4Uk9zELEJwgZvcKZrsrpcYbaw9DBa17OPxlM1GJIKZrr0hfoZqr0DKQwK8diIBy+RGGInQ1GmsLFjWP/WZvK+YsNqqMkwCOo1a6Hwy29+bGG1FnnqA/iZD6g5VeAF4Eu8f1BZa6+xOcemOn5xUaZf4SsiwKFXkYEjOW2vFO7RfwqjU6bIevkrnhh6TajrYiuvRgCJQyW2KhpsDIE+IbpDwpt/h9X9Pw/eTjyrZFdNeMx8L9YRSmVkSWMYTEMQ2mMWeD7SSVtYwVUJJ6ARBT3JkwSpyCQYUc5EdNYCQUOR7QgWyeY4UXk6DjPPWY9S21GIUcD0nOs8ZFhJTTqv1IJ/KY9Tr7LguzNW05O1jzLkohqp1a/Dhxu744/WdCvxB0C4tfk9c4HT0JnAoes2ltXl1I/0qP1mnzdEFGw3ZzyMf7yJiWlw9RpbjqqmZb2+E4xgGU6mtyp3WZA5+WcKnxZ9FvXTDzFbklxzn8ZpTxyuytjqmSts42gEkyvTOY9uH4u5fWMD/AKeJfpL0spVGfy2AxumDV2C7UO46M3E06OsPWu4TPPptr7bLbRpqiBaHcg4Cyfg2Ro+RwWJE5N+8WKa1OG4XHeei8P0zVaWtGG1gvI9IoqBneScnVS9zbUA+pOBNFaVqRuIz7zHrtVssQgbKxnoOv1lsqt1afC7Kyrko+OdvaVampg5JrC89B0nPq8UTZywDdOPvNGm1Sam0qruV/wDKFicaG3HaSCZ7H8Jo8nn5j/eTpIrsfzXARQOTgRpZ/J9jCdYC4jKmojtwYR0HzxekRMSniEFDMM4hIscQMnfEpLHoc5PJhY3XkdZBiN3w9DEEh8wnS0tz002ZdAKwDgg5mDTIbLgPTk/SdArWrXqSxIsXvx7SZXiv8Pptu1dTXLitBlAOntO2o6e3Mw6Y7L61IAGCuPfH+02I2bWAPygTg335OjCOHN8drdkrbP8ALzzgdD+0w06y6ldoFbgnJLKcn7zv2qtlPlOPhs6+089dQ1FzVt1U/j7zo+Ps8oqWW3Gk79WbVCoioeMtz/8AdZZoNbZTevm2FaRnIUTJjmGJ0sbenXxnQ4wbmz7o37SqzXaO5iWvUq3Ven5zzuIsQnkoipt6lf8AElCqFCWAAYA2j94Ty2ITL8Uf2fs1Yb2+4jz7GPAx0EWB6TUEW+v4Sh7ATjMvMgHKCxNqkPgEkZIgFT87AARn+rOf2kWwOvzbuQRzJ2ZNoGCT/Uv7So854A74z0gHR8MH81j3CjHOOssZ6w9qFR8VwBY8zlKzqwatiGHcTTZqbsN/MQ5J7dfeTSoydm6/ytRQfM/6oGAAQQeOT9J06T/Nt9N2PtPGeY6sGZt2GDc9TPYUuo05fOcnJAnL8jHpvqytRrPE6NLYytl7FHyr2+s5uo1v8aEsKKpx2mPWJeNTZZaCgsY9eh9BIUltuBwPpNterHHn2zzzmeF5jlRqdq3cWp8JHwnqc+n0jDN3x95syWRCQ3N/T+MGW2mwrYozgHgg9eYBZHK9/t9xCMKanyoBk8zIjcSYeINErCix8FlUZ5LHAkPMMgWz1GeYBaalDZZ6VX08wfpmX6fQC+sgXoQfRT+uJgen4d9Z3L3HcfWaNAmofUV1UElnOAAMxTdcHFXynqtDdpxuclkA+YSNVQtsLABac43MeB+89Hdpm0WnD67U11Z4AUFifbHczz73Frzuwq5wu5flH0iiZVMQ6tX+WooUDTse5YAlpt01FNrB6cps7A8fhPNgru2lmZM9u82eHal9NrEVy6qW2tu7E9OJlswyq4leOcXVOxrdM9lRFeGbr5Vi8OPTM4SoiFggYDPRuonqTZhdwIKjqPScfxPRLUW1AVnrzklT8Vf7rMdG2f1yXsw9w5+Mx9hIGwA9IvN4na5k8Q2yvzY/NgE9sJX5sIBiCN7R7X9pYBHiMlJD+n3kSG9JfiIiAUpkvjBJIxgd56rw5G8O8Je+msDUMhZiy5OP+J5xktQqKgyhsZcd8+83fxxo1FdZuV0RArFejjpg59opVFe2a/W3am8W2sGYcDPRZVYSbCTZ5nq2OMyWrRqtS6sykg9R9pFyfhHbHHoIhKVjbiMvuAHZcYkTtyfLyBxgk8yTu+1MlcjkbcZ+0h8xOTlic5HrGT02mc6nS16qojzNu1x1DeoMuqu/l7GGV6c/lOT/AId1OLrNM2QGO5c+vedp6V3bugPWedsjxymJdmE+WLieI+G2VuH0wU0NgL8QBHtMFun1FOS9Z2+oIInqQr15XG5D2iNCMuFGB3BM0x3zHaMtUPJZb0+8Mt6TXrKqK7sadyy9x6GUYnZE3FueYpVlvT7wluIRkIoQjIojCEAizFVO0kZHOJXb/oPquTCERt+sAK0EjJIXJPf4RKtUeUHYDgQhFBz2rYD+HBwM7o14u44/4hCMk9GT/mdRyc7+v9p6/u39oQnF8nuHRp6Jf0gPnT3MITlhtLylwAucAcbj+cjCE9aOnCcIQjD/2Q=='
                channel='Gulapsha Tarannum'
                verified
                subs='786k'
                noOfVideos={786}
                description='You can also grow in mern stack'
            />
            <hr />

            <VideoRow
                views='5.7M'
                subs='789K'
                description='Do you want to learn MERN STACK'
                timestamp='5 minutes ago'
                channel='Gulapsha Tarannum'
                title="Let's start MERN STACK journey from today"
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqtWSAaYPRgPkgvIlF9YtzFeJtWGNG1rvk5j4qdN1iA&s'
            />

            <VideoRow
                views='5.7M'
                subs='789K'
                description='Do you want to learn MERN STACK'
                timestamp='5 minutes ago'
                channel='Gulapsha Tarannum'
                title="Let's start MERN STACK journey from today"
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqtWSAaYPRgPkgvIlF9YtzFeJtWGNG1rvk5j4qdN1iA&s'
            />


        </div>
    )
}

export default SearchPage;
