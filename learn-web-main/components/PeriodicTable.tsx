"use client";

import { useState } from "react";

interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: string;
  electronConfig: string;
  group?: number;
  period: number;
  position: { row: number; col: number };
}

const elements: Element[] = [
  // Period 1
  { symbol: "H", name: "Hydro", atomicNumber: 1, atomicMass: 1.008, category: "nonmetal", electronConfig: "1s¹", period: 1, group: 1, position: { row: 1, col: 1 } },
  { symbol: "He", name: "Heli", atomicNumber: 2, atomicMass: 4.003, category: "noble-gas", electronConfig: "1s²", period: 1, group: 18, position: { row: 1, col: 18 } },

  // Period 2
  { symbol: "Li", name: "Liti", atomicNumber: 3, atomicMass: 6.941, category: "alkali-metal", electronConfig: "[He] 2s¹", period: 2, group: 1, position: { row: 2, col: 1 } },
  { symbol: "Be", name: "Beri", atomicNumber: 4, atomicMass: 9.012, category: "alkaline-earth", electronConfig: "[He] 2s²", period: 2, group: 2, position: { row: 2, col: 2 } },
  { symbol: "B", name: "Bo", atomicNumber: 5, atomicMass: 10.81, category: "metalloid", electronConfig: "[He] 2s² 2p¹", period: 2, group: 13, position: { row: 2, col: 13 } },
  { symbol: "C", name: "Cacbon", atomicNumber: 6, atomicMass: 12.01, category: "nonmetal", electronConfig: "[He] 2s² 2p²", period: 2, group: 14, position: { row: 2, col: 14 } },
  { symbol: "N", name: "Nitơ", atomicNumber: 7, atomicMass: 14.01, category: "nonmetal", electronConfig: "[He] 2s² 2p³", period: 2, group: 15, position: { row: 2, col: 15 } },
  { symbol: "O", name: "Oxi", atomicNumber: 8, atomicMass: 16.00, category: "nonmetal", electronConfig: "[He] 2s² 2p⁴", period: 2, group: 16, position: { row: 2, col: 16 } },
  { symbol: "F", name: "Flo", atomicNumber: 9, atomicMass: 19.00, category: "halogen", electronConfig: "[He] 2s² 2p⁵", period: 2, group: 17, position: { row: 2, col: 17 } },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.18, category: "noble-gas", electronConfig: "[He] 2s² 2p⁶", period: 2, group: 18, position: { row: 2, col: 18 } },

  // Period 3
  { symbol: "Na", name: "Natri", atomicNumber: 11, atomicMass: 22.99, category: "alkali-metal", electronConfig: "[Ne] 3s¹", period: 3, group: 1, position: { row: 3, col: 1 } },
  { symbol: "Mg", name: "Magie", atomicNumber: 12, atomicMass: 24.31, category: "alkaline-earth", electronConfig: "[Ne] 3s²", period: 3, group: 2, position: { row: 3, col: 2 } },
  { symbol: "Al", name: "Nhôm", atomicNumber: 13, atomicMass: 26.98, category: "post-transition", electronConfig: "[Ne] 3s² 3p¹", period: 3, group: 13, position: { row: 3, col: 13 } },
  { symbol: "Si", name: "Silic", atomicNumber: 14, atomicMass: 28.09, category: "metalloid", electronConfig: "[Ne] 3s² 3p²", period: 3, group: 14, position: { row: 3, col: 14 } },
  { symbol: "P", name: "Photpho", atomicNumber: 15, atomicMass: 30.97, category: "nonmetal", electronConfig: "[Ne] 3s² 3p³", period: 3, group: 15, position: { row: 3, col: 15 } },
  { symbol: "S", name: "Lưu huỳnh", atomicNumber: 16, atomicMass: 32.07, category: "nonmetal", electronConfig: "[Ne] 3s² 3p⁴", period: 3, group: 16, position: { row: 3, col: 16 } },
  { symbol: "Cl", name: "Clo", atomicNumber: 17, atomicMass: 35.45, category: "halogen", electronConfig: "[Ne] 3s² 3p⁵", period: 3, group: 17, position: { row: 3, col: 17 } },
  { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.95, category: "noble-gas", electronConfig: "[Ne] 3s² 3p⁶", period: 3, group: 18, position: { row: 3, col: 18 } },

  // Period 4
  { symbol: "K", name: "Kali", atomicNumber: 19, atomicMass: 39.10, category: "alkali-metal", electronConfig: "[Ar] 4s¹", period: 4, group: 1, position: { row: 4, col: 1 } },
  { symbol: "Ca", name: "Canxi", atomicNumber: 20, atomicMass: 40.08, category: "alkaline-earth", electronConfig: "[Ar] 4s²", period: 4, group: 2, position: { row: 4, col: 2 } },
  { symbol: "Sc", name: "Scandi", atomicNumber: 21, atomicMass: 44.96, category: "transition", electronConfig: "[Ar] 3d¹ 4s²", period: 4, group: 3, position: { row: 4, col: 3 } },
  { symbol: "Ti", name: "Titan", atomicNumber: 22, atomicMass: 47.87, category: "transition", electronConfig: "[Ar] 3d² 4s²", period: 4, group: 4, position: { row: 4, col: 4 } },
  { symbol: "V", name: "Vanadi", atomicNumber: 23, atomicMass: 50.94, category: "transition", electronConfig: "[Ar] 3d³ 4s²", period: 4, group: 5, position: { row: 4, col: 5 } },
  { symbol: "Cr", name: "Crom", atomicNumber: 24, atomicMass: 52.00, category: "transition", electronConfig: "[Ar] 3d⁵ 4s¹", period: 4, group: 6, position: { row: 4, col: 6 } },
  { symbol: "Mn", name: "Mangan", atomicNumber: 25, atomicMass: 54.94, category: "transition", electronConfig: "[Ar] 3d⁵ 4s²", period: 4, group: 7, position: { row: 4, col: 7 } },
  { symbol: "Fe", name: "Sắt", atomicNumber: 26, atomicMass: 55.85, category: "transition", electronConfig: "[Ar] 3d⁶ 4s²", period: 4, group: 8, position: { row: 4, col: 8 } },
  { symbol: "Co", name: "Coban", atomicNumber: 27, atomicMass: 58.93, category: "transition", electronConfig: "[Ar] 3d⁷ 4s²", period: 4, group: 9, position: { row: 4, col: 9 } },
  { symbol: "Ni", name: "Niken", atomicNumber: 28, atomicMass: 58.69, category: "transition", electronConfig: "[Ar] 3d⁸ 4s²", period: 4, group: 10, position: { row: 4, col: 10 } },
  { symbol: "Cu", name: "Đồng", atomicNumber: 29, atomicMass: 63.55, category: "transition", electronConfig: "[Ar] 3d¹⁰ 4s¹", period: 4, group: 11, position: { row: 4, col: 11 } },
  { symbol: "Zn", name: "Kẽm", atomicNumber: 30, atomicMass: 65.38, category: "transition", electronConfig: "[Ar] 3d¹⁰ 4s²", period: 4, group: 12, position: { row: 4, col: 12 } },
  { symbol: "Ga", name: "Gali", atomicNumber: 31, atomicMass: 69.72, category: "post-transition", electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹", period: 4, group: 13, position: { row: 4, col: 13 } },
  { symbol: "Ge", name: "Gecmani", atomicNumber: 32, atomicMass: 72.63, category: "metalloid", electronConfig: "[Ar] 3d¹⁰ 4s² 4p²", period: 4, group: 14, position: { row: 4, col: 14 } },
  { symbol: "As", name: "Asen", atomicNumber: 33, atomicMass: 74.92, category: "metalloid", electronConfig: "[Ar] 3d¹⁰ 4s² 4p³", period: 4, group: 15, position: { row: 4, col: 15 } },
  { symbol: "Se", name: "Selen", atomicNumber: 34, atomicMass: 78.97, category: "nonmetal", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", period: 4, group: 16, position: { row: 4, col: 16 } },
  { symbol: "Br", name: "Brom", atomicNumber: 35, atomicMass: 79.90, category: "halogen", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", period: 4, group: 17, position: { row: 4, col: 17 } },
  { symbol: "Kr", name: "Kripton", atomicNumber: 36, atomicMass: 83.80, category: "noble-gas", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", period: 4, group: 18, position: { row: 4, col: 18 } },

  // Period 5
  { symbol: "Rb", name: "Rubiđi", atomicNumber: 37, atomicMass: 85.47, category: "alkali-metal", electronConfig: "[Kr] 5s¹", period: 5, group: 1, position: { row: 5, col: 1 } },
  { symbol: "Sr", name: "Stronti", atomicNumber: 38, atomicMass: 87.62, category: "alkaline-earth", electronConfig: "[Kr] 5s²", period: 5, group: 2, position: { row: 5, col: 2 } },
  { symbol: "Y", name: "Ytri", atomicNumber: 39, atomicMass: 88.91, category: "transition", electronConfig: "[Kr] 4d¹ 5s²", period: 5, group: 3, position: { row: 5, col: 3 } },
  { symbol: "Zr", name: "Zirconi", atomicNumber: 40, atomicMass: 91.22, category: "transition", electronConfig: "[Kr] 4d² 5s²", period: 5, group: 4, position: { row: 5, col: 4 } },
  { symbol: "Nb", name: "Niobi", atomicNumber: 41, atomicMass: 92.91, category: "transition", electronConfig: "[Kr] 4d⁴ 5s¹", period: 5, group: 5, position: { row: 5, col: 5 } },
  { symbol: "Mo", name: "Molipđen", atomicNumber: 42, atomicMass: 95.95, category: "transition", electronConfig: "[Kr] 4d⁵ 5s¹", period: 5, group: 6, position: { row: 5, col: 6 } },
  { symbol: "Tc", name: "Tecneti", atomicNumber: 43, atomicMass: 98, category: "transition", electronConfig: "[Kr] 4d⁵ 5s²", period: 5, group: 7, position: { row: 5, col: 7 } },
  { symbol: "Ru", name: "Rutheni", atomicNumber: 44, atomicMass: 101.07, category: "transition", electronConfig: "[Kr] 4d⁷ 5s¹", period: 5, group: 8, position: { row: 5, col: 8 } },
  { symbol: "Rh", name: "Rhodi", atomicNumber: 45, atomicMass: 102.91, category: "transition", electronConfig: "[Kr] 4d⁸ 5s¹", period: 5, group: 9, position: { row: 5, col: 9 } },
  { symbol: "Pd", name: "Paladi", atomicNumber: 46, atomicMass: 106.42, category: "transition", electronConfig: "[Kr] 4d¹⁰", period: 5, group: 10, position: { row: 5, col: 10 } },
  { symbol: "Ag", name: "Bạc", atomicNumber: 47, atomicMass: 107.87, category: "transition", electronConfig: "[Kr] 4d¹⁰ 5s¹", period: 5, group: 11, position: { row: 5, col: 11 } },
  { symbol: "Cd", name: "Cadimi", atomicNumber: 48, atomicMass: 112.41, category: "transition", electronConfig: "[Kr] 4d¹⁰ 5s²", period: 5, group: 12, position: { row: 5, col: 12 } },
  { symbol: "In", name: "Indi", atomicNumber: 49, atomicMass: 114.82, category: "post-transition", electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹", period: 5, group: 13, position: { row: 5, col: 13 } },
  { symbol: "Sn", name: "Thiếc", atomicNumber: 50, atomicMass: 118.71, category: "post-transition", electronConfig: "[Kr] 4d¹⁰ 5s² 5p²", period: 5, group: 14, position: { row: 5, col: 14 } },
  { symbol: "Sb", name: "Antimon", atomicNumber: 51, atomicMass: 121.76, category: "metalloid", electronConfig: "[Kr] 4d¹⁰ 5s² 5p³", period: 5, group: 15, position: { row: 5, col: 15 } },
  { symbol: "Te", name: "Telu", atomicNumber: 52, atomicMass: 127.60, category: "metalloid", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", period: 5, group: 16, position: { row: 5, col: 16 } },
  { symbol: "I", name: "Iot", atomicNumber: 53, atomicMass: 126.90, category: "halogen", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", period: 5, group: 17, position: { row: 5, col: 17 } },
  { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.29, category: "noble-gas", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", period: 5, group: 18, position: { row: 5, col: 18 } },

  // Period 6
  { symbol: "Cs", name: "Xezi", atomicNumber: 55, atomicMass: 132.91, category: "alkali-metal", electronConfig: "[Xe] 6s¹", period: 6, group: 1, position: { row: 6, col: 1 } },
  { symbol: "Ba", name: "Bari", atomicNumber: 56, atomicMass: 137.33, category: "alkaline-earth", electronConfig: "[Xe] 6s²", period: 6, group: 2, position: { row: 6, col: 2 } },
  { symbol: "La", name: "Lantan", atomicNumber: 57, atomicMass: 138.91, category: "lanthanide", electronConfig: "[Xe] 5d¹ 6s²", period: 6, group: 3, position: { row: 9, col: 3 } },
  { symbol: "Ce", name: "Xeri", atomicNumber: 58, atomicMass: 140.12, category: "lanthanide", electronConfig: "[Xe] 4f¹ 5d¹ 6s²", period: 6, position: { row: 9, col: 4 } },
  { symbol: "Pr", name: "Praseodim", atomicNumber: 59, atomicMass: 140.91, category: "lanthanide", electronConfig: "[Xe] 4f³ 6s²", period: 6, position: { row: 9, col: 5 } },
  { symbol: "Nd", name: "Neodim", atomicNumber: 60, atomicMass: 144.24, category: "lanthanide", electronConfig: "[Xe] 4f⁴ 6s²", period: 6, position: { row: 9, col: 6 } },
  { symbol: "Pm", name: "Prometi", atomicNumber: 61, atomicMass: 145, category: "lanthanide", electronConfig: "[Xe] 4f⁵ 6s²", period: 6, position: { row: 9, col: 7 } },
  { symbol: "Sm", name: "Samari", atomicNumber: 62, atomicMass: 150.36, category: "lanthanide", electronConfig: "[Xe] 4f⁶ 6s²", period: 6, position: { row: 9, col: 8 } },
  { symbol: "Eu", name: "Europi", atomicNumber: 63, atomicMass: 151.96, category: "lanthanide", electronConfig: "[Xe] 4f⁷ 6s²", period: 6, position: { row: 9, col: 9 } },
  { symbol: "Gd", name: "Gadolini", atomicNumber: 64, atomicMass: 157.25, category: "lanthanide", electronConfig: "[Xe] 4f⁷ 5d¹ 6s²", period: 6, position: { row: 9, col: 10 } },
  { symbol: "Tb", name: "Terbi", atomicNumber: 65, atomicMass: 158.93, category: "lanthanide", electronConfig: "[Xe] 4f⁹ 6s²", period: 6, position: { row: 9, col: 11 } },
  { symbol: "Dy", name: "Dysprosi", atomicNumber: 66, atomicMass: 162.50, category: "lanthanide", electronConfig: "[Xe] 4f¹⁰ 6s²", period: 6, position: { row: 9, col: 12 } },
  { symbol: "Ho", name: "Holmi", atomicNumber: 67, atomicMass: 164.93, category: "lanthanide", electronConfig: "[Xe] 4f¹¹ 6s²", period: 6, position: { row: 9, col: 13 } },
  { symbol: "Er", name: "Erbi", atomicNumber: 68, atomicMass: 167.26, category: "lanthanide", electronConfig: "[Xe] 4f¹² 6s²", period: 6, position: { row: 9, col: 14 } },
  { symbol: "Tm", name: "Thuli", atomicNumber: 69, atomicMass: 168.93, category: "lanthanide", electronConfig: "[Xe] 4f¹³ 6s²", period: 6, position: { row: 9, col: 15 } },
  { symbol: "Yb", name: "Ytterbi", atomicNumber: 70, atomicMass: 173.05, category: "lanthanide", electronConfig: "[Xe] 4f¹⁴ 6s²", period: 6, position: { row: 9, col: 16 } },
  { symbol: "Lu", name: "Luteti", atomicNumber: 71, atomicMass: 174.97, category: "lanthanide", electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²", period: 6, position: { row: 9, col: 17 } },
  { symbol: "Hf", name: "Hafni", atomicNumber: 72, atomicMass: 178.49, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d² 6s²", period: 6, group: 4, position: { row: 6, col: 4 } },
  { symbol: "Ta", name: "Tantal", atomicNumber: 73, atomicMass: 180.95, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²", period: 6, group: 5, position: { row: 6, col: 5 } },
  { symbol: "W", name: "Vonfram", atomicNumber: 74, atomicMass: 183.84, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²", period: 6, group: 6, position: { row: 6, col: 6 } },
  { symbol: "Re", name: "Reni", atomicNumber: 75, atomicMass: 186.21, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²", period: 6, group: 7, position: { row: 6, col: 7 } },
  { symbol: "Os", name: "Osmi", atomicNumber: 76, atomicMass: 190.23, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²", period: 6, group: 8, position: { row: 6, col: 8 } },
  { symbol: "Ir", name: "Iridi", atomicNumber: 77, atomicMass: 192.22, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²", period: 6, group: 9, position: { row: 6, col: 9 } },
  { symbol: "Pt", name: "Platin", atomicNumber: 78, atomicMass: 195.08, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹", period: 6, group: 10, position: { row: 6, col: 10 } },
  { symbol: "Au", name: "Vàng", atomicNumber: 79, atomicMass: 196.97, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", period: 6, group: 11, position: { row: 6, col: 11 } },
  { symbol: "Hg", name: "Thủy ngân", atomicNumber: 80, atomicMass: 200.59, category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", period: 6, group: 12, position: { row: 6, col: 12 } },
  { symbol: "Tl", name: "Tali", atomicNumber: 81, atomicMass: 204.38, category: "post-transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", period: 6, group: 13, position: { row: 6, col: 13 } },
  { symbol: "Pb", name: "Chì", atomicNumber: 82, atomicMass: 207.2, category: "post-transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", period: 6, group: 14, position: { row: 6, col: 14 } },
  { symbol: "Bi", name: "Bismut", atomicNumber: 83, atomicMass: 208.98, category: "post-transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", period: 6, group: 15, position: { row: 6, col: 15 } },
  { symbol: "Po", name: "Poloni", atomicNumber: 84, atomicMass: 209, category: "post-transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", period: 6, group: 16, position: { row: 6, col: 16 } },
  { symbol: "At", name: "Astatin", atomicNumber: 85, atomicMass: 210, category: "halogen", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", period: 6, group: 17, position: { row: 6, col: 17 } },
  { symbol: "Rn", name: "Radon", atomicNumber: 86, atomicMass: 222, category: "noble-gas", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", period: 6, group: 18, position: { row: 6, col: 18 } },

  // Period 7
  { symbol: "Fr", name: "Franxi", atomicNumber: 87, atomicMass: 223, category: "alkali-metal", electronConfig: "[Rn] 7s¹", period: 7, group: 1, position: { row: 7, col: 1 } },
  { symbol: "Ra", name: "Radi", atomicNumber: 88, atomicMass: 226, category: "alkaline-earth", electronConfig: "[Rn] 7s²", period: 7, group: 2, position: { row: 7, col: 2 } },
  { symbol: "Ac", name: "Actini", atomicNumber: 89, atomicMass: 227, category: "actinide", electronConfig: "[Rn] 6d¹ 7s²", period: 7, group: 3, position: { row: 10, col: 3 } },
  { symbol: "Th", name: "Thori", atomicNumber: 90, atomicMass: 232.04, category: "actinide", electronConfig: "[Rn] 6d² 7s²", period: 7, position: { row: 10, col: 4 } },
  { symbol: "Pa", name: "Protactini", atomicNumber: 91, atomicMass: 231.04, category: "actinide", electronConfig: "[Rn] 5f² 6d¹ 7s²", period: 7, position: { row: 10, col: 5 } },
  { symbol: "U", name: "Urani", atomicNumber: 92, atomicMass: 238.03, category: "actinide", electronConfig: "[Rn] 5f³ 6d¹ 7s²", period: 7, position: { row: 10, col: 6 } },
  { symbol: "Np", name: "Neptuni", atomicNumber: 93, atomicMass: 237, category: "actinide", electronConfig: "[Rn] 5f⁴ 6d¹ 7s²", period: 7, position: { row: 10, col: 7 } },
  { symbol: "Pu", name: "Plutoni", atomicNumber: 94, atomicMass: 244, category: "actinide", electronConfig: "[Rn] 5f⁶ 7s²", period: 7, position: { row: 10, col: 8 } },
  { symbol: "Am", name: "Americi", atomicNumber: 95, atomicMass: 243, category: "actinide", electronConfig: "[Rn] 5f⁷ 7s²", period: 7, position: { row: 10, col: 9 } },
  { symbol: "Cm", name: "Curi", atomicNumber: 96, atomicMass: 247, category: "actinide", electronConfig: "[Rn] 5f⁷ 6d¹ 7s²", period: 7, position: { row: 10, col: 10 } },
  { symbol: "Bk", name: "Berkeli", atomicNumber: 97, atomicMass: 247, category: "actinide", electronConfig: "[Rn] 5f⁹ 7s²", period: 7, position: { row: 10, col: 11 } },
  { symbol: "Cf", name: "Californi", atomicNumber: 98, atomicMass: 251, category: "actinide", electronConfig: "[Rn] 5f¹⁰ 7s²", period: 7, position: { row: 10, col: 12 } },
  { symbol: "Es", name: "Einsteini", atomicNumber: 99, atomicMass: 252, category: "actinide", electronConfig: "[Rn] 5f¹¹ 7s²", period: 7, position: { row: 10, col: 13 } },
  { symbol: "Fm", name: "Fermi", atomicNumber: 100, atomicMass: 257, category: "actinide", electronConfig: "[Rn] 5f¹² 7s²", period: 7, position: { row: 10, col: 14 } },
  { symbol: "Md", name: "Mendelevi", atomicNumber: 101, atomicMass: 258, category: "actinide", electronConfig: "[Rn] 5f¹³ 7s²", period: 7, position: { row: 10, col: 15 } },
  { symbol: "No", name: "Nobeli", atomicNumber: 102, atomicMass: 259, category: "actinide", electronConfig: "[Rn] 5f¹⁴ 7s²", period: 7, position: { row: 10, col: 16 } },
  { symbol: "Lr", name: "Lorenxi", atomicNumber: 103, atomicMass: 266, category: "actinide", electronConfig: "[Rn] 5f¹⁴ 7s² 7p¹", period: 7, position: { row: 10, col: 17 } },
  { symbol: "Rf", name: "Rutherfordi", atomicNumber: 104, atomicMass: 267, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d² 7s²", period: 7, group: 4, position: { row: 7, col: 4 } },
  { symbol: "Db", name: "Dubni", atomicNumber: 105, atomicMass: 268, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d³ 7s²", period: 7, group: 5, position: { row: 7, col: 5 } },
  { symbol: "Sg", name: "Seaborgi", atomicNumber: 106, atomicMass: 269, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²", period: 7, group: 6, position: { row: 7, col: 6 } },
  { symbol: "Bh", name: "Bohri", atomicNumber: 107, atomicMass: 270, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²", period: 7, group: 7, position: { row: 7, col: 7 } },
  { symbol: "Hs", name: "Hassi", atomicNumber: 108, atomicMass: 277, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²", period: 7, group: 8, position: { row: 7, col: 8 } },
  { symbol: "Mt", name: "Meitneri", atomicNumber: 109, atomicMass: 278, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²", period: 7, group: 9, position: { row: 7, col: 9 } },
  { symbol: "Ds", name: "Darmstadti", atomicNumber: 110, atomicMass: 281, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁸ 7s²", period: 7, group: 10, position: { row: 7, col: 10 } },
  { symbol: "Rg", name: "Roentgeni", atomicNumber: 111, atomicMass: 282, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s²", period: 7, group: 11, position: { row: 7, col: 11 } },
  { symbol: "Cn", name: "Copernici", atomicNumber: 112, atomicMass: 285, category: "transition", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", period: 7, group: 12, position: { row: 7, col: 12 } },
  { symbol: "Nh", name: "Nihoni", atomicNumber: 113, atomicMass: 286, category: "post-transition", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", period: 7, group: 13, position: { row: 7, col: 13 } },
  { symbol: "Fl", name: "Flerovi", atomicNumber: 114, atomicMass: 289, category: "post-transition", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", period: 7, group: 14, position: { row: 7, col: 14 } },
  { symbol: "Mc", name: "Moscovi", atomicNumber: 115, atomicMass: 290, category: "post-transition", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", period: 7, group: 15, position: { row: 7, col: 15 } },
  { symbol: "Lv", name: "Livermori", atomicNumber: 116, atomicMass: 293, category: "post-transition", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", period: 7, group: 16, position: { row: 7, col: 16 } },
  { symbol: "Ts", name: "Tennessin", atomicNumber: 117, atomicMass: 294, category: "halogen", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", period: 7, group: 17, position: { row: 7, col: 17 } },
  { symbol: "Og", name: "Oganesson", atomicNumber: 118, atomicMass: 294, category: "noble-gas", electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", period: 7, group: 18, position: { row: 7, col: 18 } },
];

const categoryColors: Record<string, string> = {
  "alkali-metal": "bg-red-400 hover:bg-red-500",
  "alkaline-earth": "bg-orange-400 hover:bg-orange-500",
  "transition": "bg-yellow-400 hover:bg-yellow-500",
  "post-transition": "bg-green-400 hover:bg-green-500",
  "metalloid": "bg-teal-400 hover:bg-teal-500",
  "nonmetal": "bg-blue-400 hover:bg-blue-500",
  "halogen": "bg-purple-400 hover:bg-purple-500",
  "noble-gas": "bg-pink-400 hover:bg-pink-500",
  "lanthanide": "bg-cyan-400 hover:bg-cyan-500",
  "actinide": "bg-rose-400 hover:bg-rose-500",
};

const categoryNames: Record<string, string> = {
  "alkali-metal": "Kim loại kiềm",
  "alkaline-earth": "Kim loại kiềm thổ",
  "transition": "Kim loại chuyển tiếp",
  "post-transition": "Kim loại sau chuyển tiếp",
  "metalloid": "Á kim",
  "nonmetal": "Phi kim",
  "halogen": "Halogen",
  "lanthanide": "Lanthanide",
  "actinide": "Actinide",
  "noble-gas": "Khí hiếm",
};

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bảng Tuần Hoàn Các Nguyên Tố Hóa Học
        </h2>
        <p className="text-gray-700 font-medium">
          Nhấp vào nguyên tố để xem thông tin chi tiết • 118 nguyên tố
        </p>
      </div>

      {/* Periodic Table Grid */}
      <div className="relative space-y-2">
        {/* Main table (rows 1-7) */}
        <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}>
          {Array.from({ length: 7 * 18 }).map((_, index) => {
            const row = Math.floor(index / 18) + 1;
            const col = (index % 18) + 1;
            const element = elements.find(
              (el) => el.position.row === row && el.position.col === col
            );

            if (!element) {
              // Show placeholder for lanthanide/actinide series
              if ((row === 6 || row === 7) && col === 3) {
                return (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg p-1 flex items-center justify-center">
                    <div className="text-[8px] text-gray-600 font-semibold text-center">
                      {row === 6 ? "57-71" : "89-103"}
                    </div>
                  </div>
                );
              }
              return <div key={index} className="aspect-square" />;
            }

            return (
              <button
                key={element.symbol}
                onClick={() => setSelectedElement(element)}
                className={`aspect-square ${
                  categoryColors[element.category]
                } rounded-lg p-1 transition-all transform hover:scale-110 hover:shadow-lg cursor-pointer border-2 ${
                  selectedElement?.symbol === element.symbol
                    ? "border-gray-800 scale-110 shadow-xl"
                    : "border-transparent"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <div className="text-[8px] font-semibold">{element.atomicNumber}</div>
                  <div className="text-sm md:text-lg font-bold">{element.symbol}</div>
                  <div className="text-[6px] md:text-[8px] truncate w-full text-center">
                    {element.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="h-4"></div>

        {/* Lanthanide series (row 9) */}
        <div className="grid gap-1 pl-8" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
          {Array.from({ length: 15 }).map((_, index) => {
            const col = index + 3;
            const element = elements.find(
              (el) => el.position.row === 9 && el.position.col === col
            );

            if (!element) {
              return <div key={`lant-${index}`} className="aspect-square" />;
            }

            return (
              <button
                key={element.symbol}
                onClick={() => setSelectedElement(element)}
                className={`aspect-square ${
                  categoryColors[element.category]
                } rounded-lg p-1 transition-all transform hover:scale-110 hover:shadow-lg cursor-pointer border-2 ${
                  selectedElement?.symbol === element.symbol
                    ? "border-gray-800 scale-110 shadow-xl"
                    : "border-transparent"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <div className="text-[8px] font-semibold">{element.atomicNumber}</div>
                  <div className="text-sm md:text-lg font-bold">{element.symbol}</div>
                  <div className="text-[6px] md:text-[8px] truncate w-full text-center">
                    {element.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Actinide series (row 10) */}
        <div className="grid gap-1 pl-8" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
          {Array.from({ length: 15 }).map((_, index) => {
            const col = index + 3;
            const element = elements.find(
              (el) => el.position.row === 10 && el.position.col === col
            );

            if (!element) {
              return <div key={`acti-${index}`} className="aspect-square" />;
            }

            return (
              <button
                key={element.symbol}
                onClick={() => setSelectedElement(element)}
                className={`aspect-square ${
                  categoryColors[element.category]
                } rounded-lg p-1 transition-all transform hover:scale-110 hover:shadow-lg cursor-pointer border-2 ${
                  selectedElement?.symbol === element.symbol
                    ? "border-gray-800 scale-110 shadow-xl"
                    : "border-transparent"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <div className="text-[8px] font-semibold">{element.atomicNumber}</div>
                  <div className="text-sm md:text-lg font-bold">{element.symbol}</div>
                  <div className="text-[6px] md:text-[8px] truncate w-full text-center">
                    {element.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Element Details */}
      {selectedElement && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border-2 border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`${
                    categoryColors[selectedElement.category]
                  } w-20 h-20 rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-4xl font-bold text-white">
                    {selectedElement.symbol}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {selectedElement.name}
                  </h3>
                  <p className="text-gray-600">
                    {categoryNames[selectedElement.category]}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-semibold text-gray-700">Số hiệu nguyên tử:</span>
                <span className="text-lg font-bold text-blue-600">
                  {selectedElement.atomicNumber}
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-semibold text-gray-700">Khối lượng nguyên tử:</span>
                <span className="text-lg font-bold text-blue-600">
                  {selectedElement.atomicMass}
                </span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-3">
                <span className="font-semibold text-gray-700">Chu kỳ:</span>
                <span className="text-lg font-bold text-blue-600">
                  {selectedElement.period}
                </span>
              </div>
              {selectedElement.group && (
                <div className="flex justify-between items-center bg-white rounded-lg p-3">
                  <span className="font-semibold text-gray-700">Nhóm:</span>
                  <span className="text-lg font-bold text-blue-600">
                    {selectedElement.group}
                  </span>
                </div>
              )}
              <div className="bg-white rounded-lg p-3">
                <span className="font-semibold text-gray-700 block mb-1">
                  Cấu hình electron:
                </span>
                <span className="text-sm font-mono text-blue-600">
                  {selectedElement.electronConfig}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 mb-4 text-lg">Chú thích phân loại nguyên tố:</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.entries(categoryNames).map(([key, name]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`${categoryColors[key]} w-6 h-6 rounded shadow-sm`} />
              <span className="text-sm text-gray-800 font-medium">{name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Lưu ý:</span> Bảng tuần hoàn chuẩn IUPAC với 118 nguyên tố.
            Lanthanide (57-71) và Actinide (89-103) được hiển thị riêng ở dưới bảng chính.
          </p>
        </div>
      </div>
    </div>
  );
}

