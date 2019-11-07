//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_RNA_DICT = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U'
};

export const toRna = (dna) => {
  if (dna.length === 0) return '';
  return [...dna].map((nucleotide) => DNA_RNA_DICT[nucleotide]).join('');
};
