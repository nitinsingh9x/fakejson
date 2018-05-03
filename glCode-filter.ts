changeFilter(data){
    this.exclusiveGlCodeList = this.exclusiveGlCodeAll;;
    this.exclusiveGlCodeList  = this.exclusiveGlCodeList.filter(x=>x.glCd.toLowerCase().indexOf(data.toLowerCase()) === 0);
  }
