import urlUI from "../../UI/preAprobado/urlUI";
const urlInteraction = class extends urlUI{
  async visit() {
    await this.page.goto('/credito');
  }
}

export default urlInteraction