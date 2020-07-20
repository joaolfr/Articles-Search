import create from "zustand";

const [useStore] = create((set) => ({
  searchKeyword: "",
  articles: [],
  pagesNumber: 1,
  actualPage: 1,
  numberOfArticles: 0,
  filter: "without",
  setSearchKeyword: (searchKeyword) =>
    set((state) => ({ ...state, searchKeyword })),
  setArticles: (articles) => set((state) => ({ ...state, articles })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setNumberOfArticles: (numberOfArticles) =>
    set((state) => ({ ...state, numberOfArticles })),
  setActualPage: (actualPage) => set((state) => ({ ...state, actualPage })),
  setPagesNumber: (pagesNumber) => set((state) => ({ ...state, pagesNumber })),
}));

export default useStore;
