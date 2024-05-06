import { useEffect, useState } from 'react';
import { fetchCast } from '../../services/filmApi';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

const AppBar = () => {};

export default MovieCast;
