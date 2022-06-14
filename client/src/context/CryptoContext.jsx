import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { CoinList } from '../config/api'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { onSnapshot, doc } from "firebase/firestore";
const Crypto = React.createContext();


const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("$");
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        if (user) {
            const coinRef = doc(db, "watchlist", user?.uid);
            var unsubscribe = onSnapshot(coinRef, (coin) => {
                if (coin.exists()) {
                    console.log(coin.data().coins);
                    setWatchlist(coin.data().coins);
                } else {
                    console.log("No Items in Watchlist");
                }
            });

            return () => {
                unsubscribe();
            };
        }
    }, [user]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);

        });

    }, []);


    const fetchCoins = async () => {

        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        console.log(data);

        setCoins(data);
        setLoading(false);
    };



    useEffect(() => {

        if (currency === "USD") setSymbol("$");
        else if (currency === "PHP") setSymbol("₱");
    }, [currency]);

    return (
        <Crypto.Provider value={{
            user, watchlist,
            alert,
            setAlert, fetchCoins, coins, loading, currency, setCurrency, symbol
        }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}; 