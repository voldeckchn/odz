import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Red&apos;s NFT Staking</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => openInNewTab(`https://reds-dumbass-nft-f5i9nekvied4bdw9m3il.onrender.com/`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/red.jpeg" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>MINT</h2>
          <p className={styles.selectBoxDescription}>
            Stake more to make more
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/red.jpeg" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STAKE</h2>
          <p className={styles.selectBoxDescription}>
            Stake your NFTs here to earn $DUMB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
