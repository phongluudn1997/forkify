import icons from "url:../../img/icons.svg";
import View from "./view";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  handleChangePage = handler => {
    this._parentElement.addEventListener("click", e => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  };

  _generateMarkup() {
    const { currentPage } = this._data;
    const numbersOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (currentPage == 1 && currentPage < numbersOfPages) {
      return `
        <button data-goto=${
          currentPage + 1
        } class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    } else if (currentPage === numbersOfPages) {
      return `
        <button data-goto=${
          currentPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
      `;
    } else if (currentPage == 1) {
      return ``;
    } else {
      return `
        <button data-goto=${
          currentPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        <button data-goto=${
          currentPage + 1
        } class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }
  }
}

export default new PaginationView();
