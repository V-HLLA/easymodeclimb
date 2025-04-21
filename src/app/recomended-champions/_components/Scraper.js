// Current Patch Number
const getCurrentPatchNumber = () => {
  const currentPatchNumber = document.querySelector(
    ".font-bold.items-center.uppercase.pt-1"
  )?.textContent;

  console.log(currentPatchNumber);
  return currentPatchNumber;
};

const getWinrateData = () => {
  // get champion names
  // Gets the top 20 champion names
  const topChampionElements = document.querySelectorAll('a[q\\:key="SO_0"]');
  const topChampionNames = Array.from(topChampionElements).map((championName) =>
    championName.innerText.trim()
  );

  // Gets the lower half champion names
  const lowerChampionElements = document.querySelectorAll(
    'div.flex.h-\\[52px\\].justify-between.text-\\[13px\\].text-\\[\\#ccc\\].odd\\:bg-\\[\\#181818\\].even\\:bg-\\[\\#101010\\] div[style="width: 110px;"] a'
  );
  const lowerChampionNames = Array.from(lowerChampionElements).map((name) =>
    name.innerText.trim()
  );

  // Combine both arrays into one
  const allChampionNames = [...topChampionNames, ...lowerChampionNames];

  // get winrate
  const qvContainers = document.querySelectorAll("div.text-center");
  const allWinrates = Array.from(qvContainers)
    .map((container) => {
      const span = container.querySelector("span");
      return span ? parseFloat(parseFloat(span.innerText).toFixed(2)) : null;
    })
    .filter((val) => val !== null);

  // Format to always keep 2 decimal places (like "53.10") as string[]
  const formattedWinrates = allWinrates.map((rate) => rate.toFixed(2));

  // if (allChampionNames.length !== formattedWinrates.length) {
  //   console.error("Mismatch between champion names and winrates");
  //   return;
  // }

  // build data
  const championData = allChampionNames.map((name, index) => ({
    championName: name,
    championWinRate: formattedWinrates[index],
  }));

  console.log("Champion Data:", championData);
};

getCurrentPatchNumber();
getWinrateData();
