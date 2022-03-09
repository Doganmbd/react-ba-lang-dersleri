function Listem ({kanki}) {
    return(
        <>
        {
            kanki.map((dost) => (
                <div key={dost.id}>
                    *** {dost.id} *** {dost.ad} ***
                </div>
            )

            )}
        
        </>

    )



}

export default Listem