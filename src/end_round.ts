
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: End Round
//===========================================================================
const Trig_End_Round_Func019Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_SaveString !== "" ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func001Func001Func004Func002C = (): boolean => {


	if ( ( ! ( udg_SaveString !== "" ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func001Func001Func004C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 17 ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 16 ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func001Func002C = (): boolean => {


	if ( ( ! ( udg_SaveString !== "" ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func001Func003C = (): boolean => {


	if ( ( ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return true;

	}

	return false;

};


const Trig_End_Round_Func019Func001C = (): boolean => {


	if ( ( ! Trig_End_Round_Func019Func001Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func019Func004C = (): boolean => {


	if ( ( ( udg_RoundInfo[ 1 ] === 3 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 9 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 7 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 12 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 13 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 14 ) ) ) {

		return true;

	}

	return false;

};


const Trig_End_Round_Func019C = (): boolean => {


	if ( ( ! Trig_End_Round_Func019Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func022A = (): void => {

	AdjustPlayerStateBJ( ( 8 + ( udg_RoundInfo[ 1 ] * 2 ) ), GetEnumPlayer(), PLAYER_STATE_RESOURCE_GOLD )

};


const Trig_End_Round_Func023Func002A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_End_Round_Func024Func002A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_End_Round_Func024Func004C = (): boolean => {


	if ( ( ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "p" ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] >= 15 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return true;

	}

	return false;

};


const Trig_End_Round_Func024Func006Func001Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) !== "p" ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func024Func006Func001Func009C = (): boolean => {


	if ( ( ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "p" ) ) ) {

		return true;

	}


	if ( ( ( udg_Revives[ GetConvertedPlayerId( GetEnumPlayer() ) ] > 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_End_Round_Func024Func006Func001C = (): boolean => {


	if ( ( ! Trig_End_Round_Func024Func006Func001Func009C() ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func024Func006A = (): void => {


	if ( ( Trig_End_Round_Func024Func006Func001C() ) ) {


		if ( ( Trig_End_Round_Func024Func006Func001Func001C() ) ) {

			udg_Revives[ GetConvertedPlayerId( GetEnumPlayer() ) ] = ( udg_Revives[ GetConvertedPlayerId( GetEnumPlayer() ) ] - 1 );

		} else {

		null

		}

		ForceAddPlayerSimple( GetEnumPlayer(), udg_Sheep )
		ForceRemovePlayerSimple( GetEnumPlayer(), udg_Spirit )
		udg_TempPoint = GetPlayerStartLocationLoc( GetEnumPlayer() );
		CreateNUnitsAtLoc( 1, FourCC( "u000" ), GetEnumPlayer(), udg_TempPoint, bj_UNIT_FACING )
		SelectUnitForPlayerSingle( GetLastCreatedUnit(), GetEnumPlayer() )
		PanCameraToTimedLocForPlayer( GetEnumPlayer(), udg_TempPoint, 0 )
		RemoveLocation( udg_TempPoint )

	} else {

	null

	}


};


const Trig_End_Round_Func024C = (): boolean => {


	if ( ( ! Trig_End_Round_Func024Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func030Func001C = (): boolean => {


	if ( ( ! ( GetItemUserData( GetEnumItem() ) === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Round_Func030A = (): void => {


	if ( ( Trig_End_Round_Func030Func001C() ) ) {

		RemoveItem( GetEnumItem() )

	} else {

	null

	}


};


const Trig_End_Round_Actions = (): void => {

	DestroyTimerDialogBJ( GetLastCreatedTimerDialogBJ() )
	PauseTimerBJ( true, udg_RobotTimer )
	DisableTrigger( gg_trg_Antirun )
	DisableTrigger( gg_trg_Lightning_Line )
	DisableTrigger( gg_trg_Stampede )
	DisableTrigger( gg_trg_Stampede_Move )
	DisableTrigger( gg_trg_Zombie_Stream )
	DisableTrigger( gg_trg_Mass_Link )
	DisableTrigger( gg_trg_Ice_Leap )
	DisableTrigger( gg_trg_Shuriken )
	DisableTrigger( gg_trg_Goblin_Rocket_Spray )
	DisableTrigger( gg_trg_Homing_Jump )
	DisableTrigger( gg_trg_Homing_Effect )
	DisableTrigger( gg_trg_Homing_Move )
	DisableTrigger( gg_trg_Thrust )
	DisableTrigger( gg_trg_Natural_Relocation )
	DisableTrigger( gg_trg_Axemaster )
	DisableTrigger( gg_trg_Archmage )

	if ( ( Trig_End_Round_Func019C() ) ) {

		udg_Continue[ 1 ] = ( udg_Continue[ 1 ] + 1 );
		DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_865" )

	} else {


		if ( ( Trig_End_Round_Func019Func001C() ) ) {


			if ( ( Trig_End_Round_Func019Func001Func002C() ) ) {

				udg_SetupString[ 4 ] = udg_SaveString;
				udg_SaveString = "";

			} else {

				udg_SetupString[ 4 ] = "Heroic";

			}

			udg_Continue[ 1 ] = ( udg_Continue[ 1 ] + 2 );
			DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_716" )

		} else {


			if ( ( Trig_End_Round_Func019Func001Func001C() ) ) {


				if ( ( Trig_End_Round_Func019Func001Func001Func001C() ) ) {

					udg_SetupString[ 4 ] = udg_SaveString;
					udg_SaveString = "";

				} else {

					udg_SetupString[ 4 ] = "Heroic";

				}

				udg_Continue[ 1 ] = ( udg_Continue[ 1 ] + 5 );
				DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_1120" )

			} else {


				if ( ( Trig_End_Round_Func019Func001Func001Func004C() ) ) {


					if ( ( Trig_End_Round_Func019Func001Func001Func004Func002C() ) ) {

						udg_SetupString[ 4 ] = udg_SaveString;
						udg_SaveString = "";

					} else {

						udg_SetupString[ 4 ] = "Heroic";

					}

					ConditionalTriggerExecute( gg_trg_Win )
					return;

				} else {

				null

				}


			}


		}


	}

	DisplayTimedTextToForce( GetPlayersAll(), 10, ( "                             |cffffcc00Congratulations! You have survived round |r" + I2S( udg_RoundInfo[ 1 ] ) ) )
	DisplayTimedTextToForce( udg_Sheep, 10, ( "                             |cffffcc00End round bonus: |r" + ( I2S( ( 8 + ( udg_RoundInfo[ 1 ] * 2 ) ) ) + " gold|cffffcc00." ) ) )
	ForForce( udg_Sheep, Trig_End_Round_Func022A )
	bj_forLoopAIndex = 9;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_TempGroup2 = GetUnitsOfPlayerAll( ConvertedPlayer( GetForLoopIndexA() ) );
		ForGroupBJ( udg_TempGroup2, Trig_End_Round_Func023Func002A )
		DestroyGroup( udg_TempGroup2 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



	if ( ( Trig_End_Round_Func024C() ) ) {

		udg_TempGroup2 = GetUnitsOfTypeIdAll( FourCC( "e002" ) );
		ForGroupBJ( udg_TempGroup2, Trig_End_Round_Func024Func002A )
		DestroyGroup( udg_TempGroup2 )
		DisplayTimedTextToForce( GetPlayersAll(), 10, "TRIGSTR_180" )
		ForForce( udg_Spirit, Trig_End_Round_Func024Func006A )

	} else {

	null

	}

	udg_RoundInfo[ 1 ] = ( udg_RoundInfo[ 1 ] + 1 );
	DisplayTimedTextToForce( GetPlayersAll(), 10, ( "                             |Cffffcc00Prepare for round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00:" ) ) )
	DisplayTimedTextToForce( GetPlayersAll(), 10, ( "|Cffffcc00" + udg_String_Round[ udg_RoundInfo[ 1 ] ] ) )
	StartTimerBJ( udg_NewRoundTimer, false, 15 )
	CreateTimerDialogBJ( GetLastCreatedTimerBJ(), ( "Level " + ( I2S( udg_RoundInfo[ 1 ] ) + " In" ) ) )
	EnumItemsInRectBJ( GetEntireMapRect(), Trig_End_Round_Func030A )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = udg_RoundInfo[ 999 ];

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		DestroyEffectBJ( udg_HomingEffect[ GetForLoopIndexA() ] )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	ConditionalTriggerExecute( gg_trg_Leaderboard )

};


//===========================================================================
const InitTrig_End_Round = (): void => {

	gg_trg_End_Round = CreateTrigger();
	TriggerRegisterTimerExpireEventBJ( gg_trg_End_Round, udg_RoundTimer )
	TriggerAddAction( gg_trg_End_Round, Trig_End_Round_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_End_Round();

} );
