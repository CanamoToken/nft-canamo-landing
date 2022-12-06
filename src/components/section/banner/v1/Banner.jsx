import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import characterThumb from "../../../../assets/images/nft/Character1.png";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import { BsAlignCenter } from "react-icons/bs";
import { MdVerticalAlignCenter } from "react-icons/md";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Banner = () => {
  const { mintModalHandle } = useModal();
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>RaroBrush</h2>
              <h3>  Hemp Asset backed  & Fernando Botero NFT</h3> {BsAlignCenter}
              <h3>
                <span className="count">
                  <Counter end={2000} duration={2000} />
                </span>{" "}
                / 2000 Minted
              </h3>
              <div className="banner_buttons">
                <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mastergrowers 
                </Button>
                <Button lg variant="outline">
                  Fernando Botero
                </Button>
              </div>
              <div className="coin-info">
                <span>Max 2 NFTs per wallet . Price 0.00080 ETH + gas</span>
                <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 27 MARCH 2023 04:00H</span>
                </span>
                <span>Presale : <span className="highlighted">UNTIL 20 JAN 04:00H</span></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <img src="lechat.png" alt="" 
  style={
    {height:"10rem"}  
    }></img> /> 
  </Grid>
  <Grid item xs={6}>
  <img src="4.png" alt="" />
  </Grid>
  <Grid item xs={6}>
  <img src="1.png" alt="" />
  </Grid>
  <Grid item xs={6}>
  <img src="2.png" alt="" />
  </Grid>
</Grid>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
