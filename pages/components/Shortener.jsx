import axios from "axios";
import { useEffect, useState } from "react"
import CachedLinks from "./CachedLinks";
import styles from "./Shortener.module.css"

function Shortener() {

    const [shortenedLinks, setShortenedLinks] = useState([]);

    // const shortenedLinks = {}

    function shortenLink(){
        var targetLink = document.getElementById("url").value;
        axios.get(`https://api.shrtco.de/v2/shorten?url=${targetLink}`)
            .then( res => {
                const localStorageLinks = JSON.parse(localStorage.getItem("shortlyLinks"));
                if(!localStorageLinks){
                    localStorageLinks = JSON.parse({});
                }
                localStorageLinks[targetLink] = res.data.result.short_link;
                localStorage.setItem("shortlyLinks", JSON.stringify(localStorageLinks));
                const shortenedLinksArray = [];
                for(var i in localStorageLinks)
                    shortenedLinksArray.push([i, localStorageLinks[i]]);
                setShortenedLinks(shortenedLinksArray.reverse());
                // console.log(shortenedLinks);
            });
        // localStorage.setItem("shortlyLinks", targetLink)
    }

    useEffect(() => {
        const shortenedLinksFromLS = JSON.parse(localStorage.getItem("shortlyLinks"));
        // console.log("line 29", shortenedLinksFromLS);
        if(shortenedLinksFromLS){
            const useEffectArray = [];
            for(var i in shortenedLinksFromLS)
                useEffectArray.push([i, shortenedLinksFromLS[i]]);
            setShortenedLinks(useEffectArray.reverse());
            // console.log("line 32",shortenedLinks);
        }
    }, []);

    return (
        <div className={styles.slideShow}>
            {/* {console.log("Logging", shortenedLinks)} */}
            {/* <div className = {styles.grayDiv}> */}
                <div className={styles.slideShowContainer}>
                    <div className={styles.urlInput}>
                        <input 
                            type = "url" 
                            id = "url" 
                            name = "url"
                            placeholder = "Shorten a link here..."
                        />
                    </div>
                    <div className={styles.shortenButton} onClick = {shortenLink}>
                        <p>Shorten it!</p>
                    </div>
                </div>
            {/* </div> */}
            {/* <CachedLinks linkList = {{"link1":"abc", "link2": "def", "link3":"hij"}}/> */}
            <CachedLinks linkList = {shortenedLinks}/>

        </div>
    )
}

export default Shortener
