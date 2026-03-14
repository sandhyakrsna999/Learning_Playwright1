//- always + blocker → P0 | always + major → P1 | always + minor → P2
//- often + blocker → P1 | often + major → P2 | often + minor → P3
//- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4


let frequency = "always";
let impact = "blocker";
if (frequency === "always") {
    if (impact === "blocker") {
        console.log("P0");
    } else if (impact === "major") {
        console.log("P1");
    } else if (impact === "minor") {
        console.log("P2");
    }
}
else if (frequency === "often") {
    if (impact === "blocker") {
        console.log("P1");
    } else if (impact === "major") {
        console.log("P2");
    } else if (impact === "minor") {
        console.log("P3");
    }
}

else if (frequency === "rarely") {
    if (impact === "blocker") {
        console.log("P2");
    } else if (impact === "major") {
        console.log("P3");
    } else if (impact === "minor") {
        console.log("P4");
    }
}


