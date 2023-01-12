const dataset = class  {
  dataset: any;
  constructor() {
    this.dataset = (
      JSON.parse(
        JSON.stringify(
          require("../../models/preAprobado/data.json")
        )
      )
    )
  }

  getData() {
    return this.dataset
  }
}

export default dataset