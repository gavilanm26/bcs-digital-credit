import url from "../../UI/preAprobado/url";
const urlInteraction = class extends url{
  async visit() {
    await this.page.goto('/credito');
  }
}

export default urlInteraction