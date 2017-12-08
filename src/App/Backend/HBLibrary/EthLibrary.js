// import HDKey from 'ethereumjs-wallet/hdkey'
// import bip39 from 'bip39'

// export default class EtherLibrary {
//   static async generateWallet (mnemonic, index) {
//     if (!mnemonic) {
//       mnemonic = await bip39.generateMnemonic()
//     }
//     var masterSeed = bip39.mnemonicToSeed(mnemonic)
//     var wallet = HDKey.fromMasterSeed(masterSeed).derivePath("m/44'/60'/0'/0").deriveChild(index).getWallet()
//     var currentReceiveAddress = '0x' + wallet.getAddress().toString('hex')
//     var privatekey = wallet.getPrivateKey().toString('hex')
//     return { currentReceiveAddress, privatekey, mnemonic }
//   }
// }
