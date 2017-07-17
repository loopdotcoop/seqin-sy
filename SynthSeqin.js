!function (ROOT) { 'use strict'

const META = {
    NAME:    { value:'SynthSeqin' }
  , ID:      { value:'sy'         }
  , VERSION: { value:'0.0.6'      }
  , SPEC:    { value:'20170705'   }
  , HELP:    { value:
`The base class for all Seqin synths. It’s not usually used directly -
it just generates silent buffers.` }
}

//// Make available on the window (browser) or global (Node.js)
const SEQIN = ROOT.SEQIN
if (! SEQIN)       throw new Error('The SEQIN global object does not exist')
if (! SEQIN.Seqin) throw new Error('The base SEQIN.Seqin class does not exist')


SEQIN.SynthSeqin = class extends SEQIN.Seqin {

    constructor (config) {
        super(config)
    }

}


//// Add static constants to the SynthSeqin class.
Object.defineProperties(SEQIN.SynthSeqin, META)


}( 'object' === typeof window ? window : global )
