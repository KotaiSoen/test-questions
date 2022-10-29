async function getAllEpisodes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if(!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const allEpisodes = await response.json();

        let objectCharacterArray: string[] = [];

        for (let i = 0; i < allEpisodes.results.length; i++) {
            let characterArray: string[] = allEpisodes.results[i].characters
            for (let j = 0; j < characterArray.length; j++) {
                try {
                    const eachCharacter = await fetch(characterArray[j], {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json'
                        }
                    })
    
                    if(!eachCharacter.ok) {
                        throw new Error(`Error! status: ${eachCharacter.status}`);
                    }

                    const eachCharacterObject = await eachCharacter.json();
                    objectCharacterArray.push(eachCharacterObject);
                } catch (error) {
                    console.log(error.message);
                }     
            }

            characterArray.splice(0, characterArray.length, ...objectCharacterArray);
        }

        console.log(allEpisodes);
    } catch (error) {
        if(error instanceof Error) {
            console.log('error message: ', error.message);
        } else {
            console.log('unexpected error: ', error);
        }
    }
}

getAllEpisodes();


