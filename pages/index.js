import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery } from "react-moralis"

export default function Home() {
    // How do we show the recenly listed NFTs?

    // We will index the events off chain and then read from our databse.
    // Setup a server to listen for those events to be fired,
    // and we will add them to database to query.

    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // Table name
        // Function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )
    console.log(listedNfts)
    return <div className={styles.container}>Hi!</div>
}
