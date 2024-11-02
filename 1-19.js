var shaw = document.querySelectorAll('.shaow')
var btnimg = document.querySelectorAll('.banner_r_img')

for(i=0;i<btnimg.length;i++){
    btnimg[i].onmouseover=function(){
        for(j=0;j<btnimg.length;j++){
            btnimg[j].className=''
        }
        this.className='yy'
        for(k=0;k<shaw.length;k++){
            if(btnimg[k].className!='yy'){
                shaw[k].className='shaow'
            }else{
                shaw[k].className='now'
            }
        }
    }
}