const printSubString = (processed, unProcessed) => {
  if (unProcessed === "") {
    console.log(processed);
    return;
  }

  printSubString(processed + unProcessed[0], unProcessed.slice(1));
  printSubString(processed, unProcessed.slice(1));
};

printSubString("", "abc");
