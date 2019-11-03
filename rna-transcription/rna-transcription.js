//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaRnaDict = []
dnaRnaDict['C'] = 'G';
dnaRnaDict['G'] = 'C';
dnaRnaDict['T'] = 'A';
dnaRnaDict['A'] = 'U';

export const toRna = (dna) => {
  if (dna.length === 0) return '';
  var rnaStrand = "";
  dna.split('').forEach((nucleotide) => rnaStrand += dnaRnaDict[nucleotide]);
  return rnaStrand;
};
