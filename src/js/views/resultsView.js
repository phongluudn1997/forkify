import View from "./view";
import icons from "url:../../img/icons.svg";

class resultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage =
    "We could not find any recipes with your query. Please try again ;)";
  _message = "";

  _generateMarkup() {
    return this._data
      .map(
        rec => `
    <li class="preview">
      <a class="preview__link" href="#${rec.id}">
        <figure class="preview__fig">
          <img src="${rec.imageUrl}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${rec.title}</h4>
          <p class="preview__publisher">${rec.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `
      )
      .join(" ");
  }
}

export default new resultsView();
