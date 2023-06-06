{
    /* TODO:
    1. Apply gradient opacity to the show's background image.
    */
}
function Billboard() {

    const showSynopsis = "When three gifted kids learn that their isolated orphanage isn’t the haven they thought, they vow to lead the other children in a risky escape plan."
    const showTitle = "http://occ-0-7264-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRGeKNxXJKnjFyjRyXLrmjZPOD-rWWJqPxAuxDqBngIMEU5Y8Uc4KhH6HVumeJOEl4i4lgA30Z-JHkmNIVOrXSL6EwB96Bu-_MqNO0wOtV6k.webp?r=b5a"
    const showBackground = "https://occ-0-7264-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYaoZbwdgA_cfnZfHNPkJLtjqBxwzfzp-0AoOObe6KPQFk0dmftvaMrsFunqeG4bHTBlQoT8_ISxLfxUYB0bejVR9WOypocJkcX4.webp?r=8ba"
    const showAgeRating = "16+"

    return (
        <>
            <div className="flex justify-center items-start top-0 w-full h-[90vh] overflow-visible z-0">
                <div className="absolute left-0 h-full w-3/4 bg-gradient-to-r from-black to-transparent opacity-50 z-20" />
                <div className="absolute top-0 h-[15%] w-full bg-gradient-to-b from-black to-transparent opacity-50 z-20" />
                <img className="relative top-0 w-full h-max pointer-events-none" src={showBackground} />
                <div className="flex flex-col items-center my-[10rem] mx-[6rem] justify-center absolute left-0 w-[30%] h-auto">
                    <img className="h-auto w-full my-6 pointer-events-none z-50" src={showTitle} />
                    <div className="w-full text-[1.13rem] leading-6 text-white pointer-events-none text-justify z-50">
                        <p>{showSynopsis}</p>
                    </div>
                    <div className="flex flex-row self-start gap-4 z-50">
                        <button className="flex flex-row gap-4 items-center bg-white text-black text-xl font-bold px-8 py-3 rounded-md my-6 hover:bg-opacity-80 transition-all">
                            <div>
                                <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" data-name="Play"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                            </div>
                            <p>Play</p>
                        </button>
                        <button className="flex flex-row gap-4 items-center bg-zinc-500 text-white text-xl font-bold px-8 py-3 rounded-md my-6 bg-opacity-80 hover:bg-opacity-60 transition-all z-50">
                            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" data-name="Info"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                            <p>More Info</p>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row absolute right-0 bottom-0 my-44 w-24 h-max bg-gray-900 bg-opacity-30">
                    <div className="bg-white h-auto w-1" />
                    <div className="flex flex-1 items-center justify-start px-4 py-2">
                        <p>{showAgeRating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Billboard;