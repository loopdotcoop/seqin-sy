!function (ROOT) { 'use strict'

const META = {
    NAME:    { value:'SeqinSynth' }
  , ID:      { value:'sy'       }
  , VERSION: { value:'0.0.2'    }
  , SPEC:    { value:'20170705' }
  , HELP:    { value:
`The base class for all Seqin synths. It’s not usually used directly -
it’s a very rudimentary synthesiser.` }
}

//// Make available on the window (browser) or global (Node.js)
const SEQIN = ROOT.SEQIN
if (! SEQIN)       throw new Error('The SEQIN global object does not exist')
if (! SEQIN.Seqin) throw new Error('The base SEQIN.Seqin class does not exist')


SEQIN.SeqinSynth = class extends SEQIN.Seqin {

    constructor (config) {

    }

}


//// Add static constants to the SeqinSynth class.
Object.defineProperties(SEQIN.SeqinSynth, META)


}( 'object' === typeof window ? window : global )
