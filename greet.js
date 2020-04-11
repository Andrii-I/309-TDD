function greet(input) {

    if (!input || input === "") return "Hello, my friend.";

    if (typeof input === 'string' || input instanceof String) {
        if (input.indexOf(',') > -1 ) {
            if (input[0] == "\"" && input[input.length - 1] == "\"") {
                input = input.replace("\"", "");
                input = input.replace("\"", "");
                //console.log(input);
            }
            else {
                input = input.split(',');
                let k;
                for (k = 0; k < input.length; k++){
                    input[k] = input[k].trim();
                }
            }
        }
    }

    if (typeof input === 'string' || input instanceof String) {
        if (input === input.toUpperCase()) return "HELLO, ".concat(input).concat(".");
        return "Hello, ".concat(input).concat(".");
    }

    if (Array.isArray(input))
    {
        let cleanInput = [];
        let f;
        for (f = 0; f < input.length; f++)
        {
            if (input[f].indexOf(',') > -1)
            {
                if (input[f][0] == "\"" && input[f][input[f].length - 1] == "\"") {
                    input[f] = input[f].replace("\"", "");
                    input[f] = input[f].replace("\"", "");
                    cleanInput.push(input[f]);
                }
                else {
                    let t = input[f].split(',');
                    let g;
                    for (g = 0; g < t.length; g++)
                    {
                        cleanInput.push(t[g].trim());
                    }
                }
            }
            else {
                cleanInput.push(input[f]);
            }
        }
        input = cleanInput;

        let noShoutNames = [];
        let shoutNames = [];
        let j;
        let out = "Hello, ";

        for (j = 0; j < input.length; j++){
            if (input[j] === input[j].toUpperCase()) {
                shoutNames = shoutNames.concat(input[j]);
            }
            else {
                noShoutNames = noShoutNames.concat(input[j]);
            }
        }


        if (noShoutNames.length == 1){
            out = out.concat(noShoutNames[0]).concat(".");
        }
        else if (noShoutNames.length == 2)
        {
            out = out.concat(noShoutNames[0]).concat(" and ").concat(noShoutNames[1]).concat(".");
        }
        else if (noShoutNames.length > 2) {
            let i;
            for (i = 0; i < input.length - 1; i++){
                out = out.concat(noShoutNames[i]);
                out = out.concat(", ");
            }
            out = out.concat("and ");
            out = out.concat(noShoutNames[i]);
            out = out.concat(".");
        }

        if (shoutNames.length == 1){
            out = out.concat(" AND HELLO ").concat(shoutNames[0]).concat("!");
        }
        else if (shoutNames.length == 2)
        {
            out = out.concat(" AND HELLO ").concat(shoutNames[0]).concat(" AND ").concat(shoutNames[1]).concat("!");
        }
        else if (shoutNames.length > 2) {
            let i;
            out = out.concat(" AND HELLO ");
            for (i = 0; i < shoutNames.length - 1; i++){
                out = out.concat(shoutNames[i]);
                out = out.concat(", ");
            }
            out = out.concat("AND ");
            out = out.concat(shoutNames[i]);
            out = out.concat("!");
        }

        return out;
    }

}
module.exports = greet;