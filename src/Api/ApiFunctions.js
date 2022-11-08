export const getData = async (value) => { //Value gives matchData if 1 and innings if 2

    const response = await fetch(
        `https://production-rest-microservice.thesportstak.com//api/v2/cricket/getScoreCard/56622`
    );
    let actualData = await response.json();
    if (value === 1) {
        return actualData.data.matchData
    }
    else if (value === 2) {
        return actualData.data.innings
    }
    else {
        return actualData.data
    }
}