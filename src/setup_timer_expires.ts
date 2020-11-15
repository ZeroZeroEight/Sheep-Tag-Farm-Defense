
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Setup Timer Expire
//===========================================================================
const Trig_Setup_Timer_Expire_Func006Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Income[ GetForLoopIndexA() ] > 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func006Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Income[ GetForLoopIndexA() ] > 20 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func006Func001C = (): boolean => {


	if ( ( ! ( udg_Upgrades[ GetForLoopIndexA() ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func007C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func008Func003A = (): void => {

	SetPlayerHandicapBJ( GetEnumPlayer(), 125 )

};


const Trig_Setup_Timer_Expire_Func008C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func012C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Setup_Timer_Expire_Func014A = (): void => {

	SetPlayerStateBJ( GetEnumPlayer(), PLAYER_STATE_RESOURCE_GOLD, ( udg_RoundInfo[ 1 ] * 15 ) )
	udg_TempPoint = GetPlayerStartLocationLoc( GetEnumPlayer() );
	CreateNUnitsAtLoc( 1, FourCC( "u000" ), GetEnumPlayer(), udg_TempPoint, bj_UNIT_FACING )
	SelectUnitForPlayerSingle( GetLastCreatedUnit(), GetEnumPlayer() )
	PanCameraToTimedLocForPlayer( GetEnumPlayer(), udg_TempPoint, 0 )
	RemoveLocation( udg_TempPoint )

};


const Trig_Setup_Timer_Expire_Actions = (): void => {

	PauseTimerBJ( true, udg_InitialTimer )
	ClearTextMessagesBJ( GetPlayersAll() )
	udg_RoundInfo[ 0 ] = 1;
	DialogDisplayBJ( false, udg_Dialog, udg_Host )
	DisplayTimedTextToForce( GetPlayersAll(), 10, ( "                             |Cffffcc00Prepare for round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + ":" ) ) )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Setup_Timer_Expire_Func006Func001C() ) ) {


			if ( ( Trig_Setup_Timer_Expire_Func006Func001Func001C() ) ) {

				udg_Income[ GetForLoopIndexA() ] = 10;
				SetPlayerStateBJ( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_USED, 10 )

			} else {

			null

			}


		} else {


			if ( ( Trig_Setup_Timer_Expire_Func006Func001Func002C() ) ) {

				udg_Income[ GetForLoopIndexA() ] = 20;
				SetPlayerStateBJ( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_USED, 20 )

			} else {

			null

			}


		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



	if ( ( Trig_Setup_Timer_Expire_Func007C() ) ) {

		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 8;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			udg_Income[ GetForLoopIndexA() ] = 2;
			udg_Upgrades[ GetForLoopIndexA() ] = 0;
			udg_Upgrades[ ( GetForLoopIndexA() + 8 ) ] = 0;
			SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_FOOD_CAP, 30 )
			SetPlayerUnitAvailableBJ( FourCC( "h005" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "n000" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h001" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00N" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00J" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00R" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00R" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00K" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00T" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00V" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00U" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00O" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerTechMaxAllowedSwap( FourCC( "h00P" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h00L" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h00M" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "n00B" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "n00C" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h00S" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
			SetPlayerHandicapBJ( ConvertedPlayer( GetForLoopIndexA() ), 100 )
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



	} else {

	null

	}


	if ( ( Trig_Setup_Timer_Expire_Func008C() ) ) {

		ForForce( GetPlayersAll(), Trig_Setup_Timer_Expire_Func008Func003A )
		udg_SetupString[ 4 ] = "Heroic";
		udg_String_Round[ 9 ] = "                             2 Frost Wyrms. Watch out for the charge!";
		udg_String_Round[ 11 ] = "                             2 Ballistas, beware the line damage";
		udg_String_Round[ 12 ] = "                             2 Dreadlords, with swarms of zombies!";
		udg_String_Round[ 13 ] = "                             2 Storm Wyrms, watch out for stampedes!";
		udg_String_Round[ 14 ] = "                             2 Siege Engines, beware of Thrust and Rockets";
		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 8;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			udg_Revives[ GetForLoopIndexA() ] = 5;
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}


		DisplayTimedTextToForce( GetPlayersAll(), 10, ( "|Cffffcc00" + udg_String_Round[ udg_RoundInfo[ 1 ] ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_479" )

	} else {

		DisplayTimedTextToForce( GetPlayersAll(), 10, ( "|Cffffcc00" + udg_String_Round[ udg_RoundInfo[ 1 ] ] ) )

	}

	DestroyTimerDialogBJ( GetLastCreatedTimerDialogBJ() )
	StartTimerBJ( udg_NewRoundTimer, false, 15 )
	CreateTimerDialogBJ( GetLastCreatedTimerBJ(), ( "Level " + ( I2S( udg_RoundInfo[ 1 ] ) + " In" ) ) )

	if ( ( Trig_Setup_Timer_Expire_Func012C() ) ) {

		udg_Continue[ 0 ] = 100;

	} else {

	null

	}

	ConditionalTriggerExecute( gg_trg_Leaderboard )
	ForForce( udg_Sheep, Trig_Setup_Timer_Expire_Func014A )

};


//===========================================================================
const InitTrig_Setup_Timer_Expire = (): void => {

	gg_trg_Setup_Timer_Expire = CreateTrigger();
	TriggerRegisterTimerExpireEventBJ( gg_trg_Setup_Timer_Expire, udg_InitialTimer )
	TriggerAddAction( gg_trg_Setup_Timer_Expire, Trig_Setup_Timer_Expire_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Setup_Timer_Expire();

} );
