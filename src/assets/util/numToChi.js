export default {
    numToChi(num) {
      return {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十',
        11: '十一',
        12: '十二',
        13: '十三',
        14: '十四',
        15: '十五',
        16: '十六',
        17: '十七',
        18: '十八',
        19: '十九',
      }[num] || '一';
    },
    newFun(num) {
      const units = '个十百千万@#%亿^&~';
      const chars = '零一二三四五六七八九';
      const a = `${num}`.split('');
      const s = [];
      const j = a.length - 1;
      if (a.length > 12) {
        throw new Error('too big');
      } else {
        for (let i = 0; i <= j; i += 1) {
          if (j === 1 || j === 5 || j === 9) {
            if (i === 0) {
              if (a[i] !== '1') s.push(chars.charAt(a[i]));
            } else {
              s.push(chars.charAt(a[i]));
            }
          } else {
            s.push(chars.charAt(a[i]));
          }
          if (i !== j) {
            s.push(units.charAt(j - i));
          }
        }
      }
      return s.join('').replace(/零([十百千万亿@#%^&~])/g,function(m,d,b){ // 优先处理 零百 零千 等
        b = units.indexOf(d);
        if(b!=-1){
            if(d=='亿')return d;
            if(d=='万')return d;
            if(a[j-b]=='0')return '零'
        }
        return '';
      }).replace(/零+/g, '零').replace(/零([万亿])/g, function(m,b){// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
              return b;
      }).replace(/亿[万千百]/g, '亿').replace(/[零]$/,'').replace(/[@#%^&~]/g,function(m){
          return {'@':'十','#':'百','%':'千','^':'十','&':'百','~':'千'}[m];
      }).replace(/([亿万])([一-九])/g, function(m,d,b,c){
          c=units.indexOf(d);
          if(c!=-1){
              if(a[j-c]=='0')return d+'零'+b
          }
          return m;
      });
    },
  };
  