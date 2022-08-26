// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v320 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v321 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v324 = stdlib.mul(v321, stdlib.checkedBigNumberify('./index.rsh:80:48:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v324, v320],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:83:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v324, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v326, v327], secs: v329, time: v328, didSend: v32, from: v325 } = txn1;
      
      sim_r.txns.push({
        amt: v326,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v338 = stdlib.add(v328, v327);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v326, v327], secs: v329, time: v328, didSend: v32, from: v325 } = txn1;
  ;
  const v338 = stdlib.add(v328, v327);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v338],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v543, time: v542, didSend: v286, from: v541 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v325,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v543, time: v542, didSend: v286, from: v541 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:75:29:application',
      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v344, time: v343, didSend: v41, from: v342 } = txn2;
    const v346 = stdlib.add(v326, v326);
    ;
    let v347 = stdlib.checkedBigNumberify('./index.rsh:99:39:decimal', stdlib.UInt_max, '0');
    let v348 = stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0');
    let v349 = stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '0');
    let v350 = stdlib.checkedBigNumberify('./index.rsh:99:45:decimal', stdlib.UInt_max, '0');
    let v351 = v343;
    let v358 = v346;
    
    while (await (async () => {
      const v362 = stdlib.add(v347, v348);
      const v363 = stdlib.eq(v362, v349);
      const v365 = stdlib.eq(v362, v350);
      const v366 = v363 ? v365 : false;
      
      return v366;})()) {
      const v373 = stdlib.add(v351, v327);
      const v377 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:107:44:application',
        fs: ['at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
        msg: 'getFinger',
        who: 'Alice'
        });
      const v378 = stdlib.protect(ctc0, await interact.getPrediction(), {
        at: './index.rsh:108:54:application',
        fs: ['at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
        msg: 'getPrediction',
        who: 'Alice'
        });
      const v379 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:110:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v380 = stdlib.digest(ctc1, [v379, v377]);
      const v382 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:111:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v383 = stdlib.digest(ctc1, [v382, v378]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v325, v326, v327, v342, v358, v373, v380, v383],
        evt_cnt: 2,
        funcNum: 4,
        lct: v351,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v386, v387], secs: v389, time: v388, didSend: v75, from: v385 } = txn3;
          
          ;
          const v397 = stdlib.add(v388, v327);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v373],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v358, v373],
          evt_cnt: 0,
          funcNum: 5,
          lct: v351,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v471, time: v470, didSend: v201, from: v469 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v471, time: v470, didSend: v201, from: v469 } = txn4;
        ;
        const v472 = stdlib.addressEq(v325, v469);
        const v473 = stdlib.addressEq(v342, v469);
        const v474 = v472 ? true : v473;
        stdlib.assert(v474, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:75:29:application',
          fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v386, v387], secs: v389, time: v388, didSend: v75, from: v385 } = txn3;
        ;
        const v390 = stdlib.addressEq(v325, v385);
        stdlib.assert(v390, {
          at: './index.rsh:118:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v397 = stdlib.add(v388, v327);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v397],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v325, v326, v327, v342, v358, v386, v387, v397],
            evt_cnt: 0,
            funcNum: 7,
            lct: v388,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v453, time: v452, didSend: v167, from: v451 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v325,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v167, from: v451 } = txn5;
          ;
          const v454 = stdlib.addressEq(v325, v451);
          const v455 = stdlib.addressEq(v342, v451);
          const v456 = v454 ? true : v455;
          stdlib.assert(v456, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:75:29:application',
            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v404, v405], secs: v407, time: v406, didSend: v87, from: v403 } = txn4;
          ;
          const v408 = stdlib.addressEq(v342, v403);
          stdlib.assert(v408, {
            at: './index.rsh:128:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v415 = stdlib.add(v406, v327);
          const txn5 = await (ctc.sendrecv({
            args: [v325, v326, v327, v342, v358, v386, v387, v404, v405, v415, v377, v379, v378, v382],
            evt_cnt: 4,
            funcNum: 8,
            lct: v406,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:138:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v420, v421, v422, v423], secs: v425, time: v424, didSend: v99, from: v419 } = txn5;
              
              ;
              
              const cv347 = v420;
              const cv348 = v404;
              const cv349 = v422;
              const cv350 = v405;
              const cv351 = v424;
              const cv358 = v358;
              
              await (async () => {
                const v347 = cv347;
                const v348 = cv348;
                const v349 = cv349;
                const v350 = cv350;
                const v351 = cv351;
                const v358 = cv358;
                
                if (await (async () => {
                  const v362 = stdlib.add(v347, v348);
                  const v363 = stdlib.eq(v362, v349);
                  const v365 = stdlib.eq(v362, v350);
                  const v366 = v363 ? v365 : false;
                  
                  return v366;})()) {
                  const v373 = stdlib.add(v351, v327);
                  sim_r.isHalt = false;
                  }
                else {
                  let v487;
                  const v488 = stdlib.add(v347, v348);
                  const v489 = stdlib.eq(v488, v349);
                  const v491 = stdlib.eq(v488, v350);
                  const v492 = v491 ? false : true;
                  const v493 = v489 ? v492 : false;
                  if (v493) {
                    v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    const v499 = v489 ? false : v491;
                    if (v499) {
                      v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    }
                  const v500 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  if (v500) {
                    const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:14:decimal', stdlib.UInt_max, '2'), v326);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v325,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v513 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    if (v513) {
                      const v514 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '2'), v326);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v342,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      
                      sim_r.txns.push({
                        kind: 'from',
                        to: v325,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v342,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v415],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v325, v326, v327, v342, v358, v386, v387, v404, v405, v415],
              evt_cnt: 0,
              funcNum: 9,
              lct: v406,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v435, time: v434, didSend: v133, from: v433 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v342,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v435, time: v434, didSend: v133, from: v433 } = txn6;
            ;
            const v436 = stdlib.addressEq(v325, v433);
            const v437 = stdlib.addressEq(v342, v433);
            const v438 = v436 ? true : v437;
            stdlib.assert(v438, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:75:29:application',
              fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v420, v421, v422, v423], secs: v425, time: v424, didSend: v99, from: v419 } = txn5;
            ;
            const v426 = stdlib.addressEq(v325, v419);
            stdlib.assert(v426, {
              at: './index.rsh:138:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v427 = stdlib.digest(ctc1, [v421, v420]);
            const v428 = stdlib.digestEq(v386, v427);
            stdlib.assert(v428, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:140:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v429 = stdlib.digest(ctc1, [v423, v422]);
            const v430 = stdlib.digestEq(v387, v429);
            stdlib.assert(v430, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:141:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            stdlib.protect(ctc3, await interact.seeOpponentMove(v404, v405), {
              at: './index.rsh:144:35:application',
              fs: ['at ./index.rsh:144:35:application call to [unknown function] (defined at: ./index.rsh:144:35:function exp)', 'at ./index.rsh:144:35:application call to "liftedInteract" (defined at: ./index.rsh:144:35:application)'],
              msg: 'seeOpponentMove',
              who: 'Alice'
              });
            
            const cv347 = v420;
            const cv348 = v404;
            const cv349 = v422;
            const cv350 = v405;
            const cv351 = v424;
            const cv358 = v358;
            
            v347 = cv347;
            v348 = cv348;
            v349 = cv349;
            v350 = cv350;
            v351 = cv351;
            v358 = cv358;
            
            continue;}
          
          }
        
        }
      
      }
    let v487;
    const v488 = stdlib.add(v347, v348);
    const v489 = stdlib.eq(v488, v349);
    const v491 = stdlib.eq(v488, v350);
    const v492 = v491 ? false : true;
    const v493 = v489 ? v492 : false;
    if (v493) {
      v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v499 = v489 ? false : v491;
      if (v499) {
        v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const v500 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v500) {
      const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:14:decimal', stdlib.UInt_max, '2'), v326);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v487), {
        at: './index.rsh:26:26:application',
        fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v513 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v513) {
        const v514 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '2'), v326);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v487), {
          at: './index.rsh:32:26:application',
          fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc3, await interact.seeOutcome(v487), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        ;
        ;
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v326, v327], secs: v329, time: v328, didSend: v32, from: v325 } = txn1;
  ;
  const v338 = stdlib.add(v328, v327);
  stdlib.protect(ctc1, await interact.acceptWager(v326), {
    at: './index.rsh:91:25:application',
    fs: ['at ./index.rsh:90:11:application call to [unknown function] (defined at: ./index.rsh:90:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v325, v326, v327, v338],
    evt_cnt: 0,
    funcNum: 1,
    lct: v328,
    onlyIf: true,
    out_tys: [],
    pay: [v326, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v344, time: v343, didSend: v41, from: v342 } = txn2;
      
      const v346 = stdlib.add(v326, v326);
      sim_r.txns.push({
        amt: v326,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v347 = stdlib.checkedBigNumberify('./index.rsh:99:39:decimal', stdlib.UInt_max, '0');
      const v348 = stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0');
      const v349 = stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '0');
      const v350 = stdlib.checkedBigNumberify('./index.rsh:99:45:decimal', stdlib.UInt_max, '0');
      const v351 = v343;
      const v358 = v346;
      
      if (await (async () => {
        const v362 = stdlib.add(v347, v348);
        const v363 = stdlib.eq(v362, v349);
        const v365 = stdlib.eq(v362, v350);
        const v366 = v363 ? v365 : false;
        
        return v366;})()) {
        const v373 = stdlib.add(v351, v327);
        sim_r.isHalt = false;
        }
      else {
        let v487;
        const v488 = stdlib.add(v347, v348);
        const v489 = stdlib.eq(v488, v349);
        const v491 = stdlib.eq(v488, v350);
        const v492 = v491 ? false : true;
        const v493 = v489 ? v492 : false;
        if (v493) {
          v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v499 = v489 ? false : v491;
          if (v499) {
            v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        const v500 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        if (v500) {
          const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:14:decimal', stdlib.UInt_max, '2'), v326);
          sim_r.txns.push({
            kind: 'from',
            to: v325,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v513 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v513) {
            const v514 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '2'), v326);
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            
            sim_r.txns.push({
              kind: 'from',
              to: v325,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v338],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v543, time: v542, didSend: v286, from: v541 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v325,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v543, time: v542, didSend: v286, from: v541 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:75:29:application',
      fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v344, time: v343, didSend: v41, from: v342 } = txn2;
    const v346 = stdlib.add(v326, v326);
    ;
    let v347 = stdlib.checkedBigNumberify('./index.rsh:99:39:decimal', stdlib.UInt_max, '0');
    let v348 = stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0');
    let v349 = stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '0');
    let v350 = stdlib.checkedBigNumberify('./index.rsh:99:45:decimal', stdlib.UInt_max, '0');
    let v351 = v343;
    let v358 = v346;
    
    while (await (async () => {
      const v362 = stdlib.add(v347, v348);
      const v363 = stdlib.eq(v362, v349);
      const v365 = stdlib.eq(v362, v350);
      const v366 = v363 ? v365 : false;
      
      return v366;})()) {
      const v373 = stdlib.add(v351, v327);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v373],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v358, v373],
          evt_cnt: 0,
          funcNum: 5,
          lct: v351,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v471, time: v470, didSend: v201, from: v469 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v471, time: v470, didSend: v201, from: v469 } = txn4;
        ;
        const v472 = stdlib.addressEq(v325, v469);
        const v473 = stdlib.addressEq(v342, v469);
        const v474 = v472 ? true : v473;
        stdlib.assert(v474, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:75:29:application',
          fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v386, v387], secs: v389, time: v388, didSend: v75, from: v385 } = txn3;
        ;
        const v390 = stdlib.addressEq(v325, v385);
        stdlib.assert(v390, {
          at: './index.rsh:118:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v397 = stdlib.add(v388, v327);
        const v401 = stdlib.protect(ctc0, await interact.getFinger(), {
          at: './index.rsh:124:52:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)'],
          msg: 'getFinger',
          who: 'Bob'
          });
        const v402 = stdlib.protect(ctc0, await interact.getPrediction(), {
          at: './index.rsh:125:62:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)'],
          msg: 'getPrediction',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v358, v386, v387, v397, v401, v402],
          evt_cnt: 2,
          funcNum: 6,
          lct: v388,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:128:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v404, v405], secs: v407, time: v406, didSend: v87, from: v403 } = txn4;
            
            ;
            const v415 = stdlib.add(v406, v327);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v397],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v325, v326, v327, v342, v358, v386, v387, v397],
            evt_cnt: 0,
            funcNum: 7,
            lct: v388,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v453, time: v452, didSend: v167, from: v451 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v325,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v167, from: v451 } = txn5;
          ;
          const v454 = stdlib.addressEq(v325, v451);
          const v455 = stdlib.addressEq(v342, v451);
          const v456 = v454 ? true : v455;
          stdlib.assert(v456, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:75:29:application',
            fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v404, v405], secs: v407, time: v406, didSend: v87, from: v403 } = txn4;
          ;
          const v408 = stdlib.addressEq(v342, v403);
          stdlib.assert(v408, {
            at: './index.rsh:128:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v415 = stdlib.add(v406, v327);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v415],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v325, v326, v327, v342, v358, v386, v387, v404, v405, v415],
              evt_cnt: 0,
              funcNum: 9,
              lct: v406,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v435, time: v434, didSend: v133, from: v433 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v342,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v435, time: v434, didSend: v133, from: v433 } = txn6;
            ;
            const v436 = stdlib.addressEq(v325, v433);
            const v437 = stdlib.addressEq(v342, v433);
            const v438 = v436 ? true : v437;
            stdlib.assert(v438, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:75:29:application',
              fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:73:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v420, v421, v422, v423], secs: v425, time: v424, didSend: v99, from: v419 } = txn5;
            ;
            const v426 = stdlib.addressEq(v325, v419);
            stdlib.assert(v426, {
              at: './index.rsh:138:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v427 = stdlib.digest(ctc3, [v421, v420]);
            const v428 = stdlib.digestEq(v386, v427);
            stdlib.assert(v428, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:140:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v429 = stdlib.digest(ctc3, [v423, v422]);
            const v430 = stdlib.digestEq(v387, v429);
            stdlib.assert(v430, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:141:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            stdlib.protect(ctc1, await interact.seeOpponentMove(v420, v422), {
              at: './index.rsh:145:33:application',
              fs: ['at ./index.rsh:145:33:application call to [unknown function] (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:145:33:application call to "liftedInteract" (defined at: ./index.rsh:145:33:application)'],
              msg: 'seeOpponentMove',
              who: 'Bob'
              });
            
            const cv347 = v420;
            const cv348 = v404;
            const cv349 = v422;
            const cv350 = v405;
            const cv351 = v424;
            const cv358 = v358;
            
            v347 = cv347;
            v348 = cv348;
            v349 = cv349;
            v350 = cv350;
            v351 = cv351;
            v358 = cv358;
            
            continue;}
          
          }
        
        }
      
      }
    let v487;
    const v488 = stdlib.add(v347, v348);
    const v489 = stdlib.eq(v488, v349);
    const v491 = stdlib.eq(v488, v350);
    const v492 = v491 ? false : true;
    const v493 = v489 ? v492 : false;
    if (v493) {
      v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v499 = v489 ? false : v491;
      if (v499) {
        v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v487 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const v500 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v500) {
      const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:14:decimal', stdlib.UInt_max, '2'), v326);
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v487), {
        at: './index.rsh:26:26:application',
        fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v513 = stdlib.eq(v487, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v513) {
        const v514 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '2'), v326);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v487), {
          at: './index.rsh:32:26:application',
          fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.seeOutcome(v487), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:156:12:application call to "payWinner" (defined at: ./index.rsh:22:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        ;
        ;
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAFQAggJIAcoC5gBBagBWDAmAwEAAQEAIjUAMRhBBVgqZEkiWzUBIQRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSELDEACaEkhBwxAAVtJIQQMQAEBSSEFDEAAViEFEkQhCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgRuSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUlKIls1/iEEWzX9gRBbNfyBGFs1+4AEf6I7UjT+FlA0/RZQNPwWUDT7FlCwMgY0AyEMWwxENP8xABJENANXWCA0/RY0/hZQARJENANXeCA0+xY0/BZQARJENP80AyEGWzQDIQhbNANXMCA0/jQDIQpbNPw0A4GgAVsyBjQDJFtCAu9IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IDd0mBBgxAAK9IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQhbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFSSJbNfghBFs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEJNQEyBjUCQgLdSCEHNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQ1bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAnFJJQxAAN9JgQQMQACYSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQhbNf1XMCA1/CRbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQ1bDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQU1ATIGNQJCAeglEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgGMSSMMQABLSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDlsMRDT/iAHENANXACA0/zQDIQhbMQAiIiIiMgY0/0kIQgBgSIGgjQaIAaEiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsDT/iAFwMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgD3Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0+jT7CEk19TT8EjX0NPU0/RI18zT0NPMQQQAvNP40+Ag18jT2NPcWUDT4FlA0+VA0/xZQNPIWUChLAVcAYGdIIQc1ATIGNQJCAJg09DTzFBBBAAYlNfJCABI09BQ08xBBAAYiNfJCAAMjNfI08iUSQQAVsSKyASU09wuyCCOyEDT2sgezQgA/NPIiEkEAFbEisgElNPcLsggjshA0+bIHs0IAI7EisgE097III7IQNPayB7OxIrIBNPeyCCOyEDT5sgezQgAAMRkhCxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001df038038062001df083398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611ad1806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046115de565b610197565b6100a16100e8366004611601565b6103fd565b6100a16100fb366004611601565b6105ad565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611601565b61072b565b34801561013457600080fd5b5061013d6108c6565b6040516100be929190611613565b6100a1610159366004611601565b610963565b6100a161016c366004611670565b610afa565b6100a161017f366004611601565b610d7f565b6100a16101923660046115de565b610eda565b6101a7600960005414601c61114c565b6101c1813515806101ba57506001548235145b601d61114c565b6000808055600280546101d390611682565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611682565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061170b565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61114c565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906117b7565b60405180910390a16102d23415601a61114c565b60608201516102ed906001600160a01b03163314601b61114c565b60408201516102fc90436117fe565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e0840152858201356101008401528351610120840152600b6000554360015590516103d291839101611816565b604051602081830303815290604052600290805190602001906103f6929190611482565b5050505050565b61040d600160005414600961114c565b6104278135158061042057506001548235145b600a61114c565b60008080556002805461043990611682565b80601f016020809104026020016040519081016040528092919081815260200182805461046590611682565b80156104b25780601f10610487576101008083540402835291602001916104b2565b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b50505050508060200190518101906104ca919061189d565b90506104dd81606001514310600b61114c565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050e929190611916565b60405180910390a161052781602001513414600861114c565b61052f611506565b815181516001600160a01b0390911690526020808301805183518301526040808501518451820152835133606091820152838501805160009081905281519095018590528051909201849052815101929092529051436080909101525161059690806117fe565b602082015160a001526105a881611171565b505050565b6105bd600160005414600d61114c565b6105d7813515806105d057506001548235145b600e61114c565b6000808055600280546105e990611682565b80601f016020809104026020016040519081016040528092919081815260200182805461061590611682565b80156106625780601f1061063757610100808354040283529160200191610662565b820191906000526020600020905b81548152906001019060200180831161064557829003601f168201915b505050505080602001905181019061067a919061189d565b905061068e8160600151431015600f61114c565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106bf929190611916565b60405180910390a16106d33415600c61114c565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610710573d6000803e3d6000fd5b506000808055600181905561072790600290611574565b5050565b61073b600760005414601761114c565b6107558135158061074e57506001548235145b601861114c565b60008080556002805461076790611682565b80601f016020809104026020016040519081016040528092919081815260200182805461079390611682565b80156107e05780601f106107b5576101008083540402835291602001916107e0565b820191906000526020600020905b8154815290600101906020018083116107c357829003601f168201915b50505050508060200190518101906107f89190611953565b905061080c8160a00151431015601961114c565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161083d929190611916565b60405180910390a16108513415601561114c565b8051610885906001600160a01b0316331461087b5760608201516001600160a01b0316331461087e565b60015b601661114c565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610710573d6000803e3d6000fd5b6000606060005460028080546108db90611682565b80601f016020809104026020016040519081016040528092919081815260200182805461090790611682565b80156109545780601f1061092957610100808354040283529160200191610954565b820191906000526020600020905b81548152906001019060200180831161093757829003601f168201915b50505050509050915091509091565b610973600960005414602161114c565b61098d8135158061098657506001548235145b602261114c565b60008080556002805461099f90611682565b80601f01602080910402602001604051908101604052809291908181526020018280546109cb90611682565b8015610a185780601f106109ed57610100808354040283529160200191610a18565b820191906000526020600020905b8154815290600101906020018083116109fb57829003601f168201915b5050505050806020019051810190610a30919061170b565b9050610a448160e00151431015602361114c565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a75929190611916565b60405180910390a1610a893415601f61114c565b8051610abd906001600160a01b03163314610ab35760608201516001600160a01b03163314610ab6565b60015b602061114c565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610710573d6000803e3d6000fd5b610b0a600b60005414602861114c565b610b2481351580610b1d57506001548235145b602961114c565b600080805560028054610b3690611682565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6290611682565b8015610baf5780601f10610b8457610100808354040283529160200191610baf565b820191906000526020600020905b815481529060010190602001808311610b9257829003601f168201915b5050505050806020019051810190610bc791906119e7565b9050610bdb8161012001514310602a61114c565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4e3415602461114c565b8051610c66906001600160a01b03163314602561114c565b60408051610cb391610c8d9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a0015114602661114c565b604080516080840135602080830191909152606080860135838501528351808403850181529201909252805191012060c0820151610cf39114602761114c565b610cfb611506565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693810193909352818401805187840135905260e0860151815190930192909252815186840135910152610100840151815190920191909152805143608091820152830151905160a001526105a881611171565b610d8f600b60005414602d61114c565b610da981351580610da257506001548235145b602e61114c565b600080805560028054610dbb90611682565b80601f0160208091040260200160405190810160405280929190818152602001828054610de790611682565b8015610e345780601f10610e0957610100808354040283529160200191610e34565b820191906000526020600020905b815481529060010190602001808311610e1757829003601f168201915b5050505050806020019051810190610e4c91906119e7565b9050610e61816101200151431015602f61114c565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610e92929190611916565b60405180910390a1610ea63415602b61114c565b8051610885906001600160a01b03163314610ed05760608201516001600160a01b03163314610ed3565b60015b602c61114c565b610eea600760005414601261114c565b610f0481351580610efd57506001548235145b601361114c565b600080805560028054610f1690611682565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4290611682565b8015610f8f5780601f10610f6457610100808354040283529160200191610f8f565b820191906000526020600020905b815481529060010190602001808311610f7257829003601f168201915b5050505050806020019051810190610fa79190611953565b9050610fbf6040518060200160405280600081525090565b610fd08260a001514310601461114c565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516110019291906117b7565b60405180910390a16110153415601061114c565b815161102d906001600160a01b03163314601161114c565b604082015161103c90436117fe565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260096000554360015590516103d29183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107275760405163100960cb60e01b81526004810182905260240160405180910390fd5b6111a76040518060a001604052806000815260200160001515815260200160001515815260200160008152602001600081525090565b6020808301519081015190516111bd91906117fe565b808252602080840180516040908101518414928501839052905160600151909214918301919091526111f05760006111f6565b80604001515b1561130e5781516040015160208301516080015161121491906117fe565b6060808301919091526040805160c0810182526000808252602082018190529181018290529182018190526080820181905260a08201528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b015160a0908101516080808c019182528c850151838d019081526007600055436001558751998a019a909a52965195880195909552925191860191909152519095169183019190915251928101929092525160c082015260e00160405160208183030381529060405260029080519060200190611308929190611482565b50505050565b806020015161131e576000611331565b806040015161132e576001611331565b60005b156113425760026080820152611371565b8060200151611355578060400151611358565b60005b156113695760006080820152611371565b600160808201525b6002816080015114156113cb57815180516020909101516001600160a01b03909116906108fc906113a3906002611a7c565b6040518115909202916000818181858888f19350505050158015610710573d6000803e3d6000fd5b60808101516113fe578160000151606001516001600160a01b03166108fc83600001516020015160026113a39190611a7c565b815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561143e573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610710573d6000803e3d6000fd5b82805461148e90611682565b90600052602060002090601f0160209004810192826114b057600085556114f6565b82601f106114c957805160ff19168380011785556114f6565b828001600101855582156114f6579182015b828111156114f65782518255916020019190600101906114db565b506115029291506115b1565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161156f6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b905290565b50805461158090611682565b6000825580601f10611590575050565b601f0160209004906000526020600020908101906115ae91906115b1565b50565b5b8082111561150257600081556001016115b2565b6000606082840312156115d857600080fd5b50919050565b6000606082840312156115f057600080fd5b6115fa83836115c6565b9392505050565b6000604082840312156115d857600080fd5b82815260006020604081840152835180604085015260005b818110156116475785810183015185820160600152820161162b565b81811115611659576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156115d857600080fd5b600181811c9082168061169657607f821691505b602082108114156115d857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156116e957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461170657600080fd5b919050565b600061010080838503121561171f57600080fd5b6040519081019067ffffffffffffffff8211818310171561175057634e487b7160e01b600052604160045260246000fd5b8160405261175d846116ef565b8152602084015160208201526040840151604082015261177f606085016116ef565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152608081016115fa60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611811576118116117e8565b500190565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161185660608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156118af57600080fd5b6040516080810181811067ffffffffffffffff821117156118e057634e487b7160e01b600052604160045260246000fd5b6040526118ec836116ef565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461194457600080fd5b80604085015250509392505050565b600060c0828403121561196557600080fd5b60405160c0810181811067ffffffffffffffff8211171561199657634e487b7160e01b600052604160045260246000fd5b6040526119a2836116ef565b815260208301516020820152604083015160408201526119c4606084016116ef565b60608201526080830151608082015260a083015160a08201528091505092915050565b600061014082840312156119fa57600080fd5b611a026116b7565b611a0b836116ef565b81526020830151602082015260408301516040820152611a2d606084016116ef565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000816000190483118215151615611a9657611a966117e8565b50029056fea264697066735822122016e4b7833728f19d1d3051d9de0d0e2d1448f130a389cf5e04c1fdacb66f872a64736f6c634300080c0033`,
  BytecodeLen: 7664,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:85:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:161:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:161:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:161:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:103:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:120:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
