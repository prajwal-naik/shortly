import styles from "./CachedLinks.module.css"

function CachedLinks({ linkList }) {
    if(linkList){
        console.log("Line 5: ", linkList.reverse());
        // const linkListArray = [];
        // for(var i in linkList)
        //     linkListArray.push([i, linkList[i]]);

        // console.log("pushedtoarray: ", linkListArray)

        // console.log("Line 10: ", linkListArray);
        const copiedDisplay = false;
        return (
            <div className = {styles.cachedLinks}>
                    <div className = {styles.innerContainer}>
                    {
                        linkList.map(([key, value]) => {
                            // console.log(key, linkList[key]);
                            return(
                                <div key = {key} className = {styles.cachedLinksContainer}>
                                    <div className = {styles.targetLink}>
                                        {key}
                                    </div>
                                    <div className = {styles.shortenedLinkGroup}>
                                        <div className = {styles.shortenedLink}>
                                            <p>{value}</p>
                                        </div>
                                        <div className = {styles.copyButton} id = {`copyButton${value}`} onClick = {() => {
                                            navigator.clipboard.writeText(value);
                                            document.getElementById(`copyButton${value}`).innerHTML = "Copied!";
                                            setTimeout(() => {
                                                document.getElementById(`copyButton${value}`).innerHTML = "Copy me!";
                                            }, 500);
                                        }}>
                                            <p>Copy me!</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
            </div>
        
        )
    }
    else
                    return null;
}

export default CachedLinks
